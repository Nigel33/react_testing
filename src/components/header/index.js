import React from 'react'
import './styles.scss'
import Logo from '../../assets/logo.png'

const Header = (props) => {
	return (
		<header>
			<div data-test="wrap" className="wrap">
				<div className="logo">
					<img data-test="logoIMG" src={Logo} alt="logo" />
				</div>
			</div>
		</header>
	)
}

export default Header