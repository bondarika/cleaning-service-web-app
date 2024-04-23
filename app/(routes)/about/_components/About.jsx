"use client";

export default function About() {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="grid grid-cols-1 shadow-lg p-8 rounded-lg border-t-4 border-primary">
        <h1 className="text-xl font-bold my-4">
          <span className="text-lg font-bold my-4">Добро пожаловать в</span>
          <span className="text-lg font-bold my-4 text-primary"> Cleany</span>!
        </h1>
        <p className="text-base my-4">
          Мы — команда профессионалов, создавшая этот сервис с одной целью:
          облегчить вашу жизнь и сделать процесс поиска и заказа клининга
          быстрым, удобным и надежным. Наша история началась с осознания того,
          как сложно найти качественные услуги клининга в современном мире. Мы
          решили исправить это, объединив в одном месте лучших специалистов в
          области уборки и предоставив простой и эффективный способ бронирования
          их услуг.
        </p>
        <p className="text-base my-4 pb-10">
          Мы гордимся тем, что каждый клиент может рассчитывать на высокий
          уровень профессионализма и безупречное качество работы наших
          специалистов. Наша команда тщательно отбирает исполнителей, проверяет
          их квалификацию и опыт, чтобы у вас было только лучшее обслуживание.
          Ваше доверие для нас важнейшее, поэтому мы стремимся к превосходству в
          каждой детали. Мы ценим ваше время и комфорт, поэтому предлагаем
          гибкие условия заказа и оперативное выполнение всех запросов. Спасибо,
          что выбрали нас. Мы готовы сделать ваш дом или офис еще чище и уютнее,
          давая вам больше времени на то, что важно для вас. Добро пожаловать в
          мир чистоты с Cleany!
        </p>
        <div className="flex items-center justify-center">
          <img
            src="pic1.jpg"
            alt="Use Client"
            className="max-w-80 max-h-90 mr-4"
          />
          <img
            src="pic2.jpg"
            alt="Use Client"
            className="max-w-80 max-h-90 mr-4"
          />
          <img
            src="pic3.jpg"
            alt="Use Client"
            className="max-w-80 max-h-90 mr-4"
          />
        </div>
      </div>
    </div>
  );
}

