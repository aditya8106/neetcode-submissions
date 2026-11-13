class ParkingSystem {
    constructor(big, medium, small) {this.spaces = [0, big, medium, small];}
    addCar(carType) {if (this.spaces[carType] > 0) {
                this.spaces[carType]--;
                        return true;
                            }

                                return false;
    }
}
