import style from './style.module.css';
import Image from 'next/image';
const Avatar = (props) => {

    const { w, h,src} = props;
    return (
        <div className={style.avatar} style={{width: w, height: h}}>
            <Image src={src} alt="User Avatar" width={w} height={h} objectFit="cover" />
        </div>
    );
}

export default Avatar;