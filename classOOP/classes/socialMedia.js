class socialMedia {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    addSocial() {
        return `Jag är ${this.name} och bor i ${this.city}.`
    }
}

let minSocialMedia = new socialMedia('David Heidari', 'Göteborg');
console.log(minSocialMedia.addSocial());

