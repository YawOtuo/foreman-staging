
type ErrorMsg = {
    title: string;
    msg: string;
}

type FirebaseErrorMap = Record<string, ErrorMsg>

export const firebaseErrorMap: FirebaseErrorMap = {
    "auth/invalid-credential": {
        title: "You entered wrong credentials",
        msg: "Please enter valid credentials"
    },
    "auth/wrong-password": {
        title: "You entered a wrong password",
        msg: "Please try again"
    },
    "auth/popup-blocked": {
        title: "The pop-up was blocked",
        msg: "Please try again, pop-up blocked"
    },
    "auth/user-not-found": {
        title: "User Account not found",
        msg: "Please try again"
    },
    "auth/weak-password": {
        title: "You entered a week password",
        msg: "Please try a stronger one"
    },
    "auth/account-exists-with-different-credential": {
        title: 'Account already exist with different credential',
        msg: "Please try again"
    },
    "auth/null-user": {
        title: "User does not exist",
        msg: "Please try again"
    },
    "auth/email-already-in-use": {
        title: "Email already in use",
        msg: "Try a different email or login method"
    }
}