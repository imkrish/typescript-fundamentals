namespace generic_exercise {

    class MyMap<T> {

        private map: Map<string, T>

        constructor() {
            this.map = new Map<string, T>()
        }

        setItem(key: string, item: T) {
            this.map.set(key, item)
        }

        clear() {
            this.map.clear()
        }

        printMap() {
            this.map.forEach(
                (value, key) => {
                    console.log(key, value)
                }
            )
        }
    }

    const numberMap = new MyMap<number>();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    numberMap.printMap();

    class CustomMap<T> {
        private map: {[key: string]: T} = {}

        setItem(key: string, item: T) {
            this.map[key] = item
        }

        getItem(key: string) {
            return this.map[key]
        }

        clear() {
            this.map = {}
        }

        printMap() {
            for (let key in this.map) {
                console.log(this.getItem(key))
            }

        }
    }

    const stringMap = new CustomMap<string>();
    stringMap.setItem('name', "Max");
    stringMap.setItem('age', "27");
    stringMap.printMap();

}

