document.addEventListener('DOMContentLoaded', (event) => {
    const newsImages = document.querySelectorAll('.news-image');
    const popup = document.getElementById('popup');
    const popupDescription = document.getElementById('popup-description');
    const closeButton = document.querySelector('.close-button');

    const descriptions = {
        'desc1': `💰 У «Фабрики проектного финансирования» меняются условия   
  
        Правительство РФ меняет условия кредитования по программе «Фабрика проектного финансирования». Договор синдицированного кредита должен содержать условие использования заемщиком полученных средств. Это может быть:  
        🔹 финансирования проекта программы или предоставление заемщиком полученных средств зависимым организациям для проектов по направлению «Городская экономика»;  
        🔹 покупка облигаций, выпущенных СФО для предоставления займа юрлицу, реализующему проект программы для его финансирования;  
        🔹 покупка облигаций, выпущенных юрлицом, реализующим проект программы, для его финансирования.  
          
        При покупке облигаций на средства кредита, деньги могут идти на рефинансирование кредитов сроком до 3 лет, предоставленных организациями, которые:   
        🔸 заключили с ВЭБ.РФ соглашение об участии в настоящей программе,   
        🔸 юрлицу, реализующему проект программы,   
        🔸 на финансирование расходов по инвестпроекту.  
          
        Появились также дополнительные требования к отраслевым проектам ГЧП в сфере в здравоохранении, физкультуры и спорта, туристско-рекреационного комплекса и социальной.   
          
        Если кредитуемый инвестпроект реализуется по концессионному или ГЧП соглашению, размер обязательств концедента по возмещению затрат концессионера на выплату процентов и комиссий по кредитам не должен превышать выплаченных концессионером процентов и комиссий по ним.  
          
        Предельный размер денежных обязательств концедента по возмещению затрат концессионера на выплату процентов и комиссий по кредитам, привлекаемым на реализацию инвестпроекта, определяется размером эффективных процентных ставок для заемщика по таким кредитам.  
          
        Инвестпроект должен предусматривать получение концессионером доходов от оказания услуг с использованием объекта соглашения или из иных источников, не связанных с получением средств бюджетной системы РФ, бюджетов государственных внебюджетных фондов РФ, средств госучреждений.  `,
        'desc2': `🟢По проекту строительства моста в Новосибирске согласовано выделение 460 млн рублей для компенсации удорожания стоимости  
  
        🟢В Прикамье ищут средства для строительства Северного автомобильного обхода Перми  
          
        🟢В Кисловодске открыли новый санаторий на 500 мест, построенный по ГЧП  
          
        🟢В Краснодаре построят многофункциональный центр по пляжным видам спорта в рамках МЧП`,
        // Add more descriptions as needed
    };

    newsImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const descKey = e.target.getAttribute('data-desc');
            popupDescription.innerText = descriptions[descKey];
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
