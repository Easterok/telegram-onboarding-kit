import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Добро пожаловать в Дирекцию тяги!',
          description:
            "Я рад приветствовать Вас в стенах нашего предприятия.<br><br>Если Вы уже трудоустроились у нас, я стану Вашим путеводителем, а если Вы пока еще не с нами - расскажу о премуществах работы в дирекции.",
          button: 'Приступим',
        },

        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Но сначала познакомимся',
          description: 'Как Вас зовут и сколько Вам лет? <br><br><a color=#b3b3b3>Не беспокойтесь, мы не будем использовать эту информацию вне этого бота.<br> </a>',
          form: [
            {
              id: 'name_from',
              placeholder: 'Фамилия И.О.',
              type: 'text',
            },
            {
              id: 'age_form',
              placeholder: 'Возраст',
              type: 'number',
            },
          ],
          button: 'Вперед',
        },
        // image
        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
          },
          shape: 'square',
          pagination: 'count',
          title: 'Что делать дальше?',
          description:
            "Нам предстоит небольшой квест по поиску нужных людей и их услуг",
          form: [
            {
              id: 'checkbox_1',
              placeholder: 'Заполнить заявление в кадрах',
              type: 'checkbox',
            },
            {
              id: 'checkbox_2',
              placeholder: 'Пройти психолога',
              type: 'checkbox',
            },
            {
              id: 'checkbox_3',
              placeholder: 'Получить пропуск',
              type: 'checkbox',
            },
            {
              id: 'checkbox_4',
              placeholder: 'Получить (или проверить) компьютер',
              type: 'checkbox',
            },
            {
              id: 'checkbox_5',
              placeholder: 'Получить телефон',
              type: 'checkbox',
            },
            {
              id: 'checkbox_6',
              placeholder: 'Присоединиться к клубу по интересам',
              type: 'checkbox',
            },
          ],
          button: 'Вперед',
        },
      ],
    },
  ],
});
