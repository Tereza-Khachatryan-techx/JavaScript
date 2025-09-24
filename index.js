document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.main-form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const textarea = document.querySelectorAll('.textarea')
        const select = document.querySelector('.select')
        const inputs = document.querySelectorAll('.input')
        const formData = {}

        const checkedRecommendations = []
        document.querySelectorAll('input[name="recommend"]:checked').forEach(checkbox => {
            checkedRecommendations.push(checkbox.value)
        });
        formData['recommendations'] = checkedRecommendations;

        if (select && select.value){
            formData['heardAboutUs'] = select.value
        }

        textarea.forEach(area => {
            if(area.id){
                formData[area.id] = area.value
            }
        })
        inputs.forEach(input => {
            if(input.id){
                formData[input.id] = input.value
            }
        })

        const tableInputs = document.querySelectorAll('.table-input')
        tableInputs.forEach((input, index) => {
            formData[`tableInput${index+1}`] = input.value
        })

        localStorage.setItem('customerDetails', JSON.stringify(formData))
        inputs.forEach(input => input.value = '')
        textarea.forEach(area => area.value = '')
        if(select) select.value = ''
        document.querySelectorAll('input[name="recommend"]:checked').forEach(checkbox => {
            checkbox.checked = false
        })
        console.log('Added to local storage', formData)
    })
})
