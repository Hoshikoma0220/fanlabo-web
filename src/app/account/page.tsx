'use client';

import { useState } from 'react';
import { FaGoogle, FaApple, FaTwitter, FaFacebook, FaGithub, FaDiscord, FaLine, FaEnvelope } from 'react-icons/fa';

const AccountPage = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [hasOpenedPrivacy, setHasOpenedPrivacy] = useState(false); // 規約が開かれたかどうかのフラグ
  const [selectedCountryCode, setSelectedCountryCode] = useState('+81'); // デフォルトで日本を選択
  const [isPhoneNumber, setIsPhoneNumber] = useState(false); // メール or 電話番号の判定

  const countryCodes = [
    { code: '+1', name: 'アメリカ' },
    { code: '+1', name: 'カナダ' },
    { code: '+44', name: 'イギリス' },
    { code: '+81', name: '日本' },
    { code: '+61', name: 'オーストラリア' },
    { code: '+49', name: 'ドイツ' },
    { code: '+33', name: 'フランス' },
    { code: '+86', name: '中国' },
    { code: '+91', name: 'インド' },
    { code: '+7', name: 'ロシア' },
    { code: '+39', name: 'イタリア' },
    { code: '+34', name: 'スペイン' },
    { code: '+82', name: '韓国' },
    { code: '+55', name: 'ブラジル' },
    { code: '+31', name: 'オランダ' },
    { code: '+46', name: 'スウェーデン' },
    { code: '+41', name: 'スイス' },
    { code: '+52', name: 'メキシコ' },
    { code: '+90', name: 'トルコ' },
    { code: '+62', name: 'インドネシア' },
    { code: '+27', name: '南アフリカ' },
    { code: '+65', name: 'シンガポール' },
    { code: '+48', name: 'ポーランド' },
    { code: '+63', name: 'フィリピン' },
    { code: '+30', name: 'ギリシャ' },
    { code: '+47', name: 'ノルウェー' },
    { code: '+45', name: 'デンマーク' },
    { code: '+32', name: 'ベルギー' },
    { code: '+20', name: 'エジプト' },
    { code: '+66', name: 'タイ' },
    { code: '+353', name: 'アイルランド' },
    { code: '+372', name: 'エストニア' },
    { code: '+420', name: 'チェコ共和国' },
    { code: '+60', name: 'マレーシア' },
    { code: '+64', name: 'ニュージーランド' },
    { code: '+56', name: 'チリ' },
    { code: '+380', name: 'ウクライナ' },
    { code: '+51', name: 'ペルー' },
    { code: '+234', name: 'ナイジェリア' },
    // 他の主要国の番号も追加可能
  ];

  const commonEmailDomains = ['gmail.com', 'yahoo.co.jp', 'outlook.com', 'icloud.com', 'hotmail.com']; // 一般的なメールドメイン

  // メールアドレスまたは電話番号の自動補完/入力変更
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // メールアドレスか電話番号かの判定
    if (/^[0-9]*$/.test(value)) {
      setIsPhoneNumber(true);
      setEmailSuggestions([]);
    } else {
      setIsPhoneNumber(false);
      const atPosition = value.indexOf('@');
      if (atPosition > -1 && value.includes('.')) {
        setEmailSuggestions([]);
      } else if (atPosition > -1) {
        const typedDomain = value.slice(atPosition + 1);
        const filteredSuggestions = commonEmailDomains.filter((domain) => domain.startsWith(typedDomain));
        setEmailSuggestions(filteredSuggestions);
      } else {
        setEmailSuggestions([]);
      }
    }
  };

  // メール補完選択
  const handleSuggestionClick = (suggestion: string) => {
    const atPosition = inputValue.indexOf('@');
    const newEmail = inputValue.slice(0, atPosition + 1) + suggestion;
    setInputValue(newEmail);
    setEmailSuggestions([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white">
      <div className={`bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg text-gray-900 transition-all duration-700 ease-in-out ${authMode ? 'h-auto' : 'h-64'}`}>
        <h1 className="text-4xl font-bold text-center mb-6">FanLaboアカウント</h1>
        <p className="text-center mb-8 text-gray-600">動画も、配信も、グッズも、広告も これ一つ</p>

        {!authMode && (
          <div className="flex space-x-4 justify-center mb-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105" onClick={() => setAuthMode('login')}>
              ログイン
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105" onClick={() => setAuthMode('register')}>
              新規登録
            </button>
          </div>
        )}

        {authMode && (
          <div className="transition-all duration-700 ease-in-out">
            <div className="text-center mb-4">
              {authMode === 'login' ? (
                <p className="text-sm">
                  新規登録はこちら{' '}
                  <button onClick={() => setAuthMode('register')} className="text-blue-500 underline">
                    新規登録
                  </button>
                </p>
              ) : (
                <p className="text-sm">
                  ログインはこちら{' '}
                  <button onClick={() => setAuthMode('login')} className="text-blue-500 underline">
                    ログイン
                  </button>
                </p>
              )}
            </div>

            {/* メールアドレスまたは電話番号の入力欄 */}
            <div className="relative mb-4">
              {isPhoneNumber ? (
                <div className="flex">
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className="p-3 text-gray-900 rounded-l border border-gray-300 bg-white"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="電話番号を入力"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full p-3 text-gray-900 rounded-r border border-gray-300"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="メールアドレスを入力"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full p-3 text-gray-900 rounded border border-gray-300"
                />
              )}
              {emailSuggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10">
                  {emailSuggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {inputValue.split('@')[0]}@{suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* SSO ログインボタン */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-red-500 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaGoogle size={24} />
                <span className="ml-2">Google</span>
              </button>
              <button className="bg-black text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaApple size={24} />
                <span className="ml-2">Apple</span>
              </button>
              <button className="bg-blue-400 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaTwitter size={24} />
                <span className="ml-2">Twitter</span>
              </button>
              <button className="bg-blue-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaFacebook size={24} />
                <span className="ml-2">Facebook</span>
              </button>
              <button className="bg-green-500 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaLine size={24} />
                <span className="ml-2">Line</span>
              </button>
              <button className="bg-purple-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaDiscord size={24} />
                <span className="ml-2">Discord</span>
              </button>
              <button className="bg-black text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaGithub size={24} />
                <span className="ml-2">GitHub</span>
              </button>
              <button className="bg-yellow-500 text-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <FaEnvelope size={24} />
                <span className="ml-2">Yahoo</span>
              </button>
            </div>

            {/* プライバシーポリシーや規約 */}
            {authMode === 'register' && (
              <div className="mb-4">
                <label className="text-sm">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={isPrivacyChecked}
                    onChange={(e) => setIsPrivacyChecked(e.target.checked && hasOpenedPrivacy)} // 開かないと同意できない
                    disabled={!hasOpenedPrivacy} // プライバシーポリシーを開いていないとチェックできない
                  />
                  <span>
                    <a
                      href="/privacy"
                      className="text-blue-500 underline"
                      target="_blank"
                      onClick={() => setHasOpenedPrivacy(true)} // リンククリックでフラグを立てる
                    >
                      プライバシーポリシー
                    </a>
                    と
                    <a
                      href="/terms"
                      className="text-blue-500 underline"
                      target="_blank"
                      onClick={() => setHasOpenedPrivacy(true)} // リンククリックでフラグを立てる
                    >
                      利用規約
                    </a>
                    を読み、同意します。
                  </span>
                </label>
              </div>
            )}

            <button
              className={`w-full ${authMode === 'login' ? 'bg-blue-500' : 'bg-green-500'} text-white p-3 rounded-lg hover:bg-opacity-90 transition`}
              disabled={authMode === 'register' && !isPrivacyChecked} // 同意しないとボタン無効
            >
              {authMode === 'login' ? 'ログイン' : '登録'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;