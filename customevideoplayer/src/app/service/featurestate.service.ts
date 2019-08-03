import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturestateService {
 const featureStates:any = {};
  constructor() {
   }

   const newStateFeature = (component) => {
    const state = {};
    this.featureStates[component] = state ;
    return state;
  }

   retrun {
     get: (component) => {
       return this.featureStates[component] || newStateFeature(component);
     }
   }
}
