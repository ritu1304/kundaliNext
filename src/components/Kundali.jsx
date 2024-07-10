import KundaliImg from '../../public/KundaliImg.png'
import Image from 'next/image';
const KundaliChart = () => {
    return (
      <div className="kundali-chart">
        <Image 
        src={KundaliImg} 
        alt="Sanatan Jyoti" 
        width={300} 
        height={300} 
      />
      </div>
    );
  };
  
  export default KundaliChart;
  