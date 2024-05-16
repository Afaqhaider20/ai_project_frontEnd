import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-rose-pine-moon min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md p-8 bg-gray-900 shadow-md rounded-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Bank Churn Prediction Web App</h1>
        <p className="text-lg mb-6">
          Our web application offers advanced machine learning solutions for predicting customer churn in banking institutions. By leveraging cutting-edge algorithms, we help banks identify customers at risk of leaving and implement effective retention strategies.
        </p>
        <p className="text-lg mb-6">
          To start using our app and access its features, please sign in to your account.
        </p>
        <div className="flex justify-center">
          <Link href="/signin" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-300 ease-in-out">
              Sign In
          </Link>
        </div>
      </div>
    </div>
  )
};
