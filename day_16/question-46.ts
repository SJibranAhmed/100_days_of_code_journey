// Sheikh Jibran Ahmed   18 / april / 2024

interface featureType{
    make:string,
    model:string,
    year:string
    describe:()=>void
}

let laptopFeature:featureType = {
    make:'Hp',
    model:'5th generation',
    year:'2021',
    describe(){
        console.log(`This "${this.make}" laptops with ${this.model} the year of ${this.year} is : 56k`)
    }
}

laptopFeature.describe()