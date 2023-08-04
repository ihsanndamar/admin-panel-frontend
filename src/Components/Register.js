const Register = () => {
    return (
        <div className="register">
            <div class="container d-flex justify-content-center align-items-center">
                <form>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>


        </div>
    );
}

export default Register
