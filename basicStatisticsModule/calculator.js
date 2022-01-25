const average = new Vue({
    el : '#averageCalculator',

    data() {
        return {
            values: [], 
            value: ''   
        }

    },

    computed: {
        sumValues() { //Sum all array values
            if (!this.values.length) {return 0}
            let acumulate = this.values.reduce((a,b) => a + parseInt(b.value), 0)
            return acumulate
        },
        average() { //Calculate average
            let average = this.sumValues / this.values.length
            return average
        }

    },

    methods: {
        addValue() { //Adding values to array
            if (!this.value) { return }

            this.values.push({
                value: this.value
            })
            this.value = 0
        }
        
    }
})








