import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function SocialLogin() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <section className="mt-2 place-items-center">
      <div className="flex w-[300px] max-w-sm flex-row  rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
        <button
          className="m-2 mt-1 mb-2 text-sm block w-96 rounded-2xl border-2 border-orange-500	p-6 py-2 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white"
          type="button"
          onClick={() => signIn()}
        >
          <svg
            className="mr-2 inline-block h-3 w-3"
            ariaHidden="true"
            focusable="false"
            dataPrefix="fab"
            dataIcon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Google
        </button>
        {/* sign in  with  github*/}
        <button
          type="button"
          onClick={() => signIn()}
          className="mb-2 block w-96 text-sm rounded-2xl border-2 border-orange-500	p-6 py-2 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="mr-2 inline-block h-3 w-3"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
          Facebook
        </button>
      </div>
    </section>
  );
}
