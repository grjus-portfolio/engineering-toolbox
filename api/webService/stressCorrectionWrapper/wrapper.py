import numpy as np
from src.stressCorrection.stressCorrection import Neuber, Glinka, Massing


class StressCorrectionWebWrapper:
    def __init__(self, payload):
        self.payload = payload.dict()
        self.youngsModulus = self.payload['youngsModulus']
        self.yieldStrength = self.payload['yieldStrength']
        self.osgoodExponent = self.payload['osgoodExponent']
        self.linearStress = self.payload['linearStress']
        self.totalElongation = self.payload['totalElongation']
        self.unitSystem = self.payload["unitSystem"]

    
    def get_neuber_data(self):
        neuber = Neuber(self.youngsModulus, self.yieldStrength, self.osgoodExponent, self.linearStress)
        return neuber.neuber_params()

    def get_chart_data(self):
        neuber = Neuber(self.youngsModulus, self.yieldStrength, self.osgoodExponent, self.linearStress)
        stress_range = list(np.linspace(0,1.5*self.yieldStrength,100))
        strain_range = [neuber.ramberg_osgood_stress(each) for each in stress_range]
        stress_range_hyper = list(np.linspace(0.005, 3*self.yieldStrength,200))
        neuber_hyper = [neuber.neuber_hyperbol_equation(each) for each in stress_range_hyper]
        return {
            "RambergOsgood":{
            "Strain":strain_range,
            "Stress":stress_range,
            "TotalElongation":self.totalElongation,
            },
            "NeuberHyperbola":{
                "Stress":stress_range_hyper,
                "Strain":neuber_hyper
            }

        }

    def get_glinka_data(self):
        glinka = Glinka(self.youngsModulus, self.yieldStrength, self.osgoodExponent, self.linearStress)
        return glinka.glinka_params()

    def get_data(self):
        neuber = self.get_neuber_data()
        glinka = self.get_glinka_data()
        massing = Massing(self.youngsModulus, self.yieldStrength, self.osgoodExponent, self.linearStress)
        neuber["ResidualStress"] = round(massing.get_residual_stress(neuber["Stress"]),2)
        glinka["ResidualStress"] = "n/a"
        
        return {
            "UnitSystem":self.unitSystem,
            "Neuber":neuber,
            "Glinka":glinka,
            "XYData":self.get_chart_data()
        }





    