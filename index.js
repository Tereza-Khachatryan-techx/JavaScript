document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.main-form');
    const select = document.querySelector('.select');
    const otherSelect = document.querySelector('.select-other');
    const otherInput = otherSelect.querySelector('input');

    document.querySelectorAll('.error-message').forEach(err => {
        err.style.display = 'none';
    });

    select.addEventListener('change', () => {
        if (select.value === 'other') {
            otherSelect.style.display = 'block'
            const otherError = document.querySelector('.error-message')
            otherError.style.display = 'flex'
        } else {
            otherSelect.style.display = 'none'
            otherInput.value = ''
            otherSelect.style.background = ''
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const textareas = document.querySelectorAll('.textarea')
        const inputs = document.querySelectorAll('.input')
        let formValid = true
        const formData = {}

        document.querySelectorAll('.name-input, .address-input, .phone-mail, .select-other').forEach(div => {
            div.style.background = ''
        });

        inputs.forEach(input => {
            const wrapper = input.closest('.name-input, .address-input, .phone-mail,.mail, .select-other')
            if (!input.value.trim()) {
                formValid = false
                if (wrapper) {
                    wrapper.style.background = 'rgb(255, 237, 237)'
                    wrapper.style.padding = '10px'
                    const error = wrapper.querySelector('.error-message')
                    if (error) error.style.display = 'flex'
                }
            } else {
                if (wrapper) wrapper.style.background = 'rgb(241, 245, 255)'
            }
        });

        if (!select.value) {
            formValid = false;
            select.style.background = 'rgb(255, 237, 237)'
        } else if (select.value === 'other') {
            otherSelect.style.display = 'block'
            if (!otherInput.value.trim()) {
                formValid = false;
                otherSelect.style.background = 'rgb(255, 237, 237)'
                otherSelect.style.padding = '10px'
                const otherError = otherSelect.querySelector('.error-message')
                if (otherError) otherError.style.display = 'flex'
            } else {
                otherSelect.style.background = 'rgb(241, 245, 255)'
                formData['heardAboutUs'] = otherInput.value.trim()
            }
        } else {
            select.style.background = 'rgb(241, 245, 255)'
            formData['heardAboutUs'] = select.valu
        }

        if (!formValid) {
            console.log('Form is invalid. Please correct the highlighted fields.')
            return;
        }

        const checkedRecommendations = [];
        document.querySelectorAll('input[name="recommend"]:checked').forEach(cb => {
            checkedRecommendations.push(cb.value)
        })
        formData['recommendations'] = checkedRecommendations

        textareas.forEach(area => {
            if (area.name) {
                formData[area.name] = area.value
            }
        });

        inputs.forEach(input => {
            if (input.id) {
                formData[input.id] = input.value
            }
        })

        const tableInputs = document.querySelectorAll('.table-input')
        tableInputs.forEach((input, index) => {
            formData[`tableInput${index + 1}`] = input.value
        });

        localStorage.setItem('customerDetails', JSON.stringify(formData))

        form.reset()
        otherSelect.style.display = 'none'
        otherSelect.style.background = ''
        select.style.background = ''
        document.querySelectorAll('.error-message').forEach(err => {
            err.style.display = 'none'
        });

        console.log('Added to local storage', formData)
    })
})
