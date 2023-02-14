import Userfront from "@userfront/react";

Userfront.init("vbqvm99n");

const SignupForm = Userfront.build({
  toolId: "ranlrlb"
});

function Signup() {
    return (
      <div>
        <h2>Sign Up</h2>
        <SignupForm />
      </div>
    );
  }

export default Signup;