import './css/Header.css';

const Header = ()=>{
    return(
        <div className="Header">
            {/* 이모지 : window키+. */}
            <h3>오늘은 📅</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default Header;