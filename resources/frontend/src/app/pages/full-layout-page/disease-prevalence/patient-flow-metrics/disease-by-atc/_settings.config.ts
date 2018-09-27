// Atc DataTable Settings
export var atcSettings = {
    columns: {
        name: {
            title: 'ATC Level',
            filter: true,
            width: '60%'
        },
        value: {
            title: 'Percentage',
            filter: true,
            width: '20%',
            valuePrepareFunction: function (value) {
                return `${value} %`
            }
        },
        population: {
            title: 'Population',
            filter: true,
            width: '20%',
            valuePrepareFunction: function (value) {
                return `${Number(value).toLocaleString('en-GB')}`
            }
        }
    },
    hideSubHeader: false,
    actions: {
        add: false,
        edit: false,
        delete: false
    },
    attr: {
        class: "table table-responsive"
    }
}