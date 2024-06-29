import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 justify-center w-full h-screen items-center">
      <h1
        className=" text-6xl text-red-500
            "
      >
        404
      </h1>
      <h1
        className=" text-5xl text-red-500
            "
      >
        Oops!!
      </h1>
      <Link className="btn btn-primary" to="/">
        GO back to Home
      </Link>
    </div>
  )
}
