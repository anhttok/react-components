import { Dayjs } from 'dayjs';
import * as React from 'react';
import './Countdown.scss';

export type CountdownProps = {
  afterpayDay: Dayjs;
  saleImageUrl: string;
};

const Countdown = (props: CountdownProps) => {
  const afterpayDay = props.afterpayDay;
  const countDownDate = afterpayDay.valueOf();
  const [countdown, setCountdown] = React.useState<
    { days: string; hours: string; minutes: string } | undefined
  >();
  const handleCountdownTime = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance <= 0) {
      setCountdown(undefined);
    }
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const padZero = (number: number) =>
      number < 10 ? '0' + number : number.toString();
    setCountdown({
      days: padZero(days),
      hours: padZero(hours),
      minutes: padZero(minutes),
    });
  };

  React.useEffect(() => {
    handleCountdownTime();
    let timer = setInterval(() => {
      handleCountdownTime();
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!countdown) {
    return null;
  }

  return (
    <div className="countdown-container">
      <div className="countdown-content">
        <p className="title">Afterpay Day is Coming</p>
        <p className="description">Get 60% off your favorite brands.</p>
        <div className="countdown-time">
          <div className="countdown-item">
            <p className="number">{countdown.days}</p>
            <p className="unit">Days</p>
          </div>
          <div className="countdown-item">
            <p className="number">{countdown.hours}</p>
            <p className="unit">Hours</p>
          </div>
          <div className="countdown-item">
            <p className="number">{countdown.minutes}</p>
            <p className="unit">Minutes</p>
          </div>
        </div>
      </div>
      <div
        className="sale-image"
        style={{ backgroundImage: `url('${props.saleImageUrl}')` }}
      ></div>
    </div>
  );
};
export default Countdown;
