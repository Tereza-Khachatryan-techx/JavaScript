document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.main-form');
    const select = document.querySelector('.select');
    const otherSelect = document.querySelector('.select-other');
    const otherInput = otherSelect.querySelector('input');
    const modal = document.querySelector('.modal')
    const mailWrapper = document.querySelector('.mail')
    const emailInput = mailWrapper.querySelector('input')


    document.querySelectorAll('.error-message').forEach(err => {
        err.style.display = 'none';
    });

    const inputFields = Array.from(document.querySelectorAll('.input'))
    inputFields.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if(e.key === 'Enter'){
                const nextInput = inputFields[index + 1]
                if(nextInput){
                    nextInput.focus()
                } else {
                    const textArea = document.querySelector('.textarea')
                    if(textArea) {
                        textArea.focus()
                    } else {
                        const submitBtn = document.querySelector('button[type="submit"]')
                        if(submitBtn) submitBtn.focus()
                    }
                } 
            }
        })
    });

    select.addEventListener('change', () => {
        if (select.value === 'other') {
            otherSelect.style.display = 'block';
        } else {
            otherSelect.style.display = 'none';
            otherInput.value = '';
            otherSelect.style.background = '';
            const otherError = otherSelect.querySelector('.error-message');
            otherError.style.display = 'none';
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll')
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const textareas = document.querySelectorAll('.textarea')
        const inputs = Array.from(document.querySelectorAll('.input')).filter(input => input.id !== 'email');
        let formValid = true
        const formData = {}

        document.querySelectorAll('.name-input, .address-input, .phone, .select-other').forEach(div => {
            div.style.background = ''
        });

        inputs.forEach(input => {
            const wrapper = 
                            input.closest('.name-input') || 
                            input.closest('.address-input') || 
                            input.closest('.phone') || 
                            input.closest('.select-other');
            if (!input.value.trim()) {
                formValid = false
                if (wrapper) {
                    wrapper.style.background = 'rgb(255, 237, 237)'
                    wrapper.style.padding = '10px'
                    const error = wrapper.querySelector('.error-message')
                    if (error) error.style.display = 'flex'
                }
            } else {
                if (wrapper) {
                    wrapper.style.background = 'rgb(241, 245, 255)'
                    const error = wrapper.querySelector('.error-message')
                    error.style.display = 'none'
                }
            }
        });

        if (emailInput) {
            const error = mailWrapper.querySelector('.mail-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailVal = emailInput.value.trim();

            if (!emailVal) {
                mailWrapper.style.background = '';
                mailWrapper.style.padding = '';
                if (error) error.style.display = 'none';
            } else if (!emailRegex.test(emailVal)) {
                formValid = false;
                mailWrapper.style.background = 'rgb(255, 237, 237)';
                mailWrapper.style.padding = '10px';
                if (error){
                    error.style.display = 'flex';
                } 
            } else {
                mailWrapper.style.background = 'rgb(241, 245, 255)';
                mailWrapper.style.padding = '';
                formValid = true
                if (error) error.style.display = 'none';
                formData['email'] = emailVal;
            }
        }

        if (!select.value) {
            formValid = false
            select.style.background = 'rgb(255, 237, 237)'
        } else if (select.value === 'other') {
            otherSelect.style.display = 'block'
            if (!otherInput.value.trim()) {
                formValid = false;
                otherSelect.style.background = 'rgb(255, 237, 237)'
                otherSelect.style.padding = '10px'
            } else {
                otherSelect.style.background = 'rgb(241, 245, 255)'
                formData['heardAboutUs'] = otherInput.value.trim()
            }
        } else {
            select.style.background = 'rgb(241, 245, 255)'
            formData['heardAboutUs'] = select.value
        }

        if (!formValid) {
            window.scrollTo({ top: 100, behavior: 'smooth' });
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

        form.reset()
        otherSelect.style.display = 'none'
        otherSelect.style.background = ''
        select.style.background = ''
        document.querySelectorAll('.error-message').forEach(err => {
            err.style.display = 'none'
        });

        localStorage.setItem('customerDetails', JSON.stringify(formData))
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
                requestAnimationFrame(() => {
                modal.style.display = 'flex'
                document.body.classList.add("no-scroll");
            })
        }, 200)
        document.querySelectorAll('.name-input, .address-input, .phone, .mail, .select-other').forEach(div => {
            div.style.background = ''
        });
        console.log('Added to local storage', formData)
    })
    modal.style.display = 'none'
})