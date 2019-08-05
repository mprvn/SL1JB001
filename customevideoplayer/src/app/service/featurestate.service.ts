import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturestateService {
  featureStates:any = {};
  constructor() {
   }

    newStateFeature = (component: any) => {
    const state = {};
    this.featureStates[component] = state ;
    return state;
  }

  get(component: any){
  return this.featureStates[component] || this.newStateFeature(component);
  }
}
