import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div class="menu">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/#">Admin Panel</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" a="#">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/register">Register</Link>
                            </li>


                            <li class="nav-item">
                                <Link class="nav-link disabled"  id="config-item" aria-disabled="false" to="config">Configuration</Link>
                            </li>

                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;