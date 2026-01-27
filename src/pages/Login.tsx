import DeCoLogo from "@/assets/DeCo_logo.png";
import KakaoTalkLogo from "@/assets/KakaoTalk_logo.svg"
const KakaoButton = () => {
  const handleKakaoLogin = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&response_type=code`;
    window.location.href = link;
  };

  return (
    <button
    className="w-full flex items-center justify-center gap-3 rounded-full bg-[#FFE812] py-3 font-semibold text-lg"
    onClick={handleKakaoLogin}>
      <img
        src={KakaoTalkLogo}
        alt="KakaoTalk"
        className="h-7 w-auto"
      />
    카카오로 이용하기
    </button>
  );
};

const NaverButton = () => {
  const handleNaverLogin = () => {
    const link = `https://nid.naver.com/oauth2.0/authorize?client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URL}&state=${import.meta.env.VITE_NAVER_STATE_STRING}`;
    window.location.href = link;
  };

  return (
    <button className="w-full flex items-center justify-center gap-3 rounded-full bg-[#03C75A] py-3 text-white font-semibold text-lg" onClick={handleNaverLogin}>
      <span className="text-white font-bold rounded-sm w-6 h-6 flex items-center justify-center">
          N
      </span>
      네이버로 이용하기
    </button>
  );
};


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6">
        {/* Logo */}
        <div className="flex flex-col items-center mb-3">
          <div className="w-[150px] h-[150px] rounded-full bg-coral-500 flex items-center justify-center mb-3">
            <img
              src={DeCoLogo}
              alt="DeCo logo"
              className="w-[150px] h-auto"
            />
          </div>
        </div>

        {/* ID */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                      focus:outline-none focus:ring-2 focus:ring-coral-300 focus:border-coral-300
                      text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-left">비밀번호</label>
          <input
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                      focus:outline-none focus:ring-2 focus:ring-coral-300 focus:border-coral-300
                      text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Login Button */}
        <button className="w-full rounded-xl bg-[#FFE4E1] py-3 text-white font-semibold mb-6 text-lg">
          로그인
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-4 text-sm text-gray-500">또는</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <KakaoButton />
          <NaverButton />
        </div>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-gray-400">
          만약 회원이 아니라면?{" "}
          <span className="font-semibold text-gray-600 cursor-pointer">
            회원가입
          </span>
        </p>
      </div>
    </div>
  );
}
