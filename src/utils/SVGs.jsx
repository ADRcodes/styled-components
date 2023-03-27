import Facebook_ from "../assets/SVGs/Facebook"
import Twitter_ from "../assets/SVGs/Twitter"
import Github_ from "../assets/SVGs/Github"
import Google_ from "../assets/SVGs/Google"
import Apple_ from "../assets/SVGs/Apple"
import MetaMask_ from "../assets/SVGs/MetaMask"
import OperaWallet_ from "../assets/SVGs/OperaWallet"
import Bitcoin_ from "../assets/SVGs/Bitcoin"
import Ethereum_ from "../assets/SVGs/Ethereum"
import PayPal_ from "../assets/SVGs/PayPal"
import AmEx_ from "../assets/SVGs/AmEx"
import Visa_ from "../assets/SVGs/Visa"
import MasterCard_ from "../assets/SVGs/MasterCard"

export const Facebook = Facebook_
export const Twitter = Twitter_
export const Github = Github_
export const Google = Google_
export const Apple = Apple_
export const MetaMask = MetaMask_
export const OperaWallet = OperaWallet_
export const Bitcoin = Bitcoin_
export const Ethereum = Ethereum_
export const PayPal = PayPal_
export const AmEx = AmEx_
export const Visa = Visa_
export const MasterCard = MasterCard_

export const FacebookSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
      <Facebook_ />
      Sign in with Facebook
    </button>
  )
}
export const TwitterSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
      <Twitter />
      Sign in with Twitter
    </button>
  )
}
export const GithubSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
      <Github_ />
      Sign in with Github
    </button>
  )
}
export const GoogleSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
      <Google_ />
      Sign in with Google
    </button>
  )
}
export const AppleSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
      <Apple_ />
      <span className="px-2"></span>
      Sign in with Apple
    </button>
  )
}
export const MetaMaskSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
      <MetaMask_ />
      Connect with MetaMask
    </button>
  )
}
export const OperaSignInBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
      <OperaWallet_ />
      Connect with Opera Wallet
    </button>
  )
}
export const BitcoinPayBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
      <Bitcoin_ />
      Pay with Bitcoin
    </button>
  )
}
export const EtherPayBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
      <Ethereum_ />
      Pay with Ethereum
    </button>
  )
}
export const PayPalBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
      <PayPal_ />
      Check out with PayPal
    </button>
  )
}
export const ApplePayBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm pl-5 pr-6 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
      Check out with Apple Pay
      <span className="px-2"></span>
      <Apple_ />
    </button>
  )
}
export const AmExBtn = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2">
      <AmEx_ />
      Pay with American Express
    </button>
  )
}
export const VisaBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
      <Visa_ />
      Pay with Visa
    </button>
  )
}
export const MasterCardBtn = () => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
      <MasterCard_ />
      Pay with MasterCard
    </button>
  )
}
