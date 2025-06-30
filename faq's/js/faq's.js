document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const button = item.querySelector('.arr');
        const content = item.querySelector('.accordion-content');
        const question = item.querySelector('.accordion-qwe');
        
        header.addEventListener('click', function() {
            // Закрываем все другие открытые элементы
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    otherItem.querySelector('.arr').style.transform = 'rotate(0deg)';
                    otherItem.querySelector('.accordion-qwe').style.color = '#292F36';
                }
            });
            
            // Переключаем текущий элемент
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                button.style.transform = 'rotate(0deg)';
                question.style.color = '#292F36';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                button.style.transform = 'rotate(90deg)';
                question.style.color = '#CDA274';
            }
        });
    });
});