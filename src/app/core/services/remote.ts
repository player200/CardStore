import { Injectable } from "@angular/core";

@Injectable()
export class Kinvey {
    private BASE_URL = 'https://baas.kinvey.com/'
    private APP_KEY = 'kid_SkkFOgvUX'

    constructor() { }

    getUrl(module, endpoint): string {
        if (endpoint === '') {
            return this.BASE_URL + module + '/' + this.APP_KEY
        }

        return this.BASE_URL + module + '/' + this.APP_KEY + '/' + endpoint
    }
}