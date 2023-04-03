import './App.css';
import { useEffect, useState } from 'react';
import pageHeader from './pageHeader.png'
import arrow from './arrowhead.png'

function App() {

  const [updateTime, setUpdateTime] = useState('');
  const [endTime, setEndTime] = useState('');


  const updateClock = () => {
    let now = new Date();
    let formattedTime = now.toLocaleString().replace(/(^\d{4})\/(\d{1,2})\/(\d{1,2})/, '$1-$2-$3').replace(/\//g, ' ').replace(/\b(\d{1})\b/g, '0$1');
    setUpdateTime(formattedTime)
  }

  const handleEndTime = () => {
    const now = new Date();
    const later = new Date(now.getTime() + 48 * 60 * 60 * 1000);

    // 整理成1994-02-21的格式
    const year = later.getFullYear();
    const month = (later.getMonth() + 1).toString().padStart(2, '0');
    const day = later.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setEndTime(formattedDate)
  }

  useEffect(() => {
    setInterval(updateClock, 1000);
    handleEndTime();
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '20px 22.5px 0 22.5px' }}>
      <div style={{ fontSize: '35px', color: '#fff', fontWeight: 'bold', marginBottom: '25px' }}>西南大学进校通行卡</div>
      <div style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', marginBottom: '27.5px' }}>疫情防控 人人有责</div>
      <div style={{ height: '550px', background: '#fff', borderRadius: '16px', marginBottom: '30px', padding: '50px 22.5px 0px 22.5px', textAlign: 'center', position: 'relative' }}>
        <div style={{ color: '#6C9281', fontSize: '20px', position: 'absolute', zIndex: '100', top: '8px', left: '50%', transform: 'translateX(-50%)', fontWeight: '500' }}>进校通行证</div>
        <img style={{ width: '100%', height: '40px', position: 'absolute', top: '0px', left: '0px' }} src={pageHeader} alt="dddd" />
        <div style={{ fontSize: '20px', color: '#000' }}>冯尤星(510****0018)的动态进校卡</div>
        <div style={{ fontSize: '22.5px', color: '#000', marginBottom: '30px' }}>更新于：<span style={{ fontSize: '22.5px', color: '#CE3540', fontWeight: '400' }} id="clock">{updateTime}</span></div>
        <img style={{ width: '237.5px', height: '237.5px', marginBottom: '32.5px' }} src={arrow} alt="phot" />
        <div style={{ fontSize: '22.5px', fontWeight: '500' }}>车牌号：川RL134F</div>
        <div style={{ fontSize: '22.5px', marginBottom: '10px', fontWeight: '500' }}>到访校区：北碚校区</div>
        <div style={{ width: '100%', height: '1.5px', background: '#DCDCDC', marginBottom: '4px' }}></div>
        <div style={{ fontSize: '22.5px', fontWeight: '500' }}>进校截止日期：{endTime} </div>
      </div>
      <div style={{ fontSize: '17px', color: '#D2FBEC' }}>西南大学版权所有(渝ICP 06005063号-4)</div>
    </div>
  );
}

export default App;
