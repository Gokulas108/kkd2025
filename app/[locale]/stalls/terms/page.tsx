"use client";
import React, { useState, type JSX } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Pacifico } from "next/font/google";
import ChangeLang from "@/app/_components/ChangeLang";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

const Page = () => {
	const t = useTranslations("Home");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const locale = useLocale();

	//function to navigate to "/registaion" page
	const navigateToRegistration = () => {
		setLoading(true);
		router.push("/stalls_x");
	};

	const EnglishBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				Please read the following terms and conditions carefully before
				proceeding with registration.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					This form is to be filled by the designated{" "}
					<strong>chakra representative</strong> for the event.
				</li>

				<li>
					A chakra may operate <strong>more than one stall</strong> at the
					event. Each stall must be added separately with its respective details
					during registration.
				</li>

				<li>
					All food stalls are charged a base fee of <strong>300 KKD</strong>.
					You have the option to generously donate{" "}
					<strong>100% of the profits</strong> earned from your stall to support
					the department, which would significantly contribute to the success of
					this event and encourage future initiatives. Alternatively, you may
					choose to split the profits, retaining{" "}
					<strong>50% for yourself</strong> while the remaining 50% goes to the
					department.
				</li>

				<li>
					You are required to choose the type of stall for each registration and
					provide the details of the <strong>stall in-charge</strong> for each
					stall.
				</li>
				<li>
					Once the form is submitted, we will carefully review and verify the
					details provided. A confirmation of your stall registration will be
					conveyed to you through a phone call.
				</li>
				<li>
					Additionally, the <strong>top 3 stalls</strong> with the best
					performance will receive special gifts as a token of appreciation for
					their efforts and contribution to the event&apos;s success.
				</li>
			</ol>

			<p className="mt-6 font-semibold">
				By proceeding with registration, you agree to these terms and
				conditions.
			</p>
		</>
	);

	const KnBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದುವರಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಈ ನಿಯಮ ಮತ್ತು
				ಷರತ್ತುಗಳನ್ನು ತಕ್ಷಣವೇ ಓದಿ.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ಈ ನಮೂನೆ ಈ ಇವೆಂಟ್‌ಗಾಗಿ ನಿರ್ದಿಷ್ಟ <strong>ಚಕ್ರ ಪ್ರತಿನಿಧಿಯ</strong> ಮೂಲಕ
					ಭರ್ತಿಮಾಡಬೇಕು.
				</li>

				<li>
					ಒಂದು ಚಕ್ರ <strong>ಒಂದುಕ್ಕಿಂತ ಹೆಚ್ಚು ಸ್ಟಾಲ್‌ಗಳನ್ನು</strong> ನಡೆಸಬಹುದು.
					ಪ್ರತಿ ಸ್ಟಾಲ್‌ಗಾಗಿ ನೊಂದಣಿಯ ಸಮಯದಲ್ಲಿ ಅದರ ವಿವರಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ
					ಸೇರಿಸಬೇಕು.
				</li>

				<li>
					ಎಲ್ಲಾ ಆಹಾರ ಸ್ಟಾಲ್‌ಗಳಿಗೆ <strong>300 KKD</strong> ಮೂಲ ಶುಲ್ಕ
					ವಿಧಿಸಲಾಗಿದೆ. ಈ ಇವೆಂಟ್‌ನ ಯಶಸ್ಸನ್ನು ಮತ್ತು ಭವಿಷ್ಯದಲ್ಲಿ ನಡೆಯುವ ಯೋಜನೆಗಳನ್ನು
					ಉತ್ತೇಜಿಸಲು <strong>ನೀವು ನಿಮ್ಮ ಸ್ಟಾಲ್‌ನ ಲಾಭದ 100%</strong> ವನ್ನು
					ಇಲಾಖೆಗೆ ದಾನ ಮಾಡಬಹುದು. ಅಥವಾ, ನೀವು{" "}
					<strong>50% ನಿಮ್ಮಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಬಹುದು</strong> ಮತ್ತು ಉಳಿದ 50% ಇಲಾಖೆಗೆ
					ನೀಡಬಹುದು.
				</li>

				<li>
					ಪ್ರತಿ ಸ್ಟಾಲ್‌ಗಾಗಿ ಸ್ಟಾಲ್‌ ಇನ್-ಚಾರ್ಜ್ ವಿವರಗಳನ್ನು ನೀಡಲು ಮತ್ತು ಸ್ಟಾಲ್‌
					ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನೀವು ಬಾಧ್ಯರಾಗಿರುತ್ತೀರಿ.
				</li>

				<li>
					ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿದ ನಂತರ, ನಾವು ನೀಡಿದ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ದೃಢಪಡಿಸುತ್ತೇವೆ.
					ನಿಮ್ಮ ಸ್ಟಾಲ್ ನೋಂದಣಿ ದೃಢೀಕರಣವನ್ನು ನಿಮಗೆ ಫೋನ್ ಕರೆ ಮೂಲಕ ತಿಳಿಸಲಾಗುವುದು.
				</li>

				<li>
					ಇವೆಂಟ್‌ನಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ ನೀಡಿದ{" "}
					<strong>ಅತ್ಯುತ್ತಮ 3 ಸ್ಟಾಲ್‌ಗಳಿಗೆ</strong> ವಿಶೇಷ ಉಡುಗೊರೆಗಳನ್ನು
					ನೀಡಲಾಗುತ್ತದೆ.
				</li>
			</ol>

			<p className="mt-6 font-semibold">
				ನೋಂದಣಿಯನ್ನು ಮುಂದುವರಿಸುವ ಮೂಲಕ, ನೀವು ಈ ನಿಯಮ ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಒಪ್ಪುತ್ತೀರಿ.
			</p>
		</>
	);

	const HiBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				पंजीकरण जारी रखने से पहले कृपया निम्नलिखित नियम और शर्तों को ध्यान से
				पढ़ें।
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					इस फॉर्म को इवेंट के लिए निर्दिष्ट <strong>चक्र प्रतिनिधि</strong>{" "}
					द्वारा भरा जाना चाहिए।
				</li>

				<li>
					एक चक्र इवेंट में <strong>एक से अधिक स्टॉल</strong> संचालित कर सकता
					है। प्रत्येक स्टॉल को पंजीकरण के दौरान अलग-अलग विवरणों के साथ जोड़ा
					जाना चाहिए।
				</li>

				<li>
					सभी फूड स्टॉल के लिए <strong>300 KKD</strong> का बेस शुल्क लगाया जाता
					है। आप अपनी स्टॉल से अर्जित <strong>100% लाभ</strong> विभाग को दान कर
					सकते हैं, जिससे इस इवेंट की सफलता में मदद मिलेगी और भविष्य के प्रयासों
					को प्रोत्साहन मिलेगा। वैकल्पिक रूप से, आप लाभ का{" "}
					<strong>50% अपने पास</strong> रख सकते हैं और शेष 50% विभाग को दे सकते
					हैं।
				</li>

				<li>
					प्रत्येक रजिस्ट्रेशन के लिए स्टॉल के प्रकार को चुनना और{" "}
					<strong>स्टॉल प्रभारी</strong> का विवरण प्रदान करना आवश्यक है।
				</li>

				<li>
					फॉर्म जमा करने के बाद, हम आपके द्वारा प्रदान की गई जानकारी की समीक्षा
					और सत्यापन करेंगे। आपकी स्टॉल पंजीकरण की पुष्टि आपको फोन कॉल के माध्यम
					से दी जाएगी।
				</li>

				<li>
					इसके अलावा, सबसे अच्छा प्रदर्शन करने वाले{" "}
					<strong>शीर्ष 3 स्टॉल</strong> को विशेष उपहार प्रदान किए जाएंगे।
				</li>
			</ol>

			<p className="mt-6 font-semibold">
				पंजीकरण जारी रखने के साथ, आप इन नियमों और शर्तों से सहमत होते हैं।
			</p>
		</>
	);

	const BnBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				রেজিস্ট্রেশন শুরু করার আগে অনুগ্রহ করে নিম্নলিখিত শর্তাবলী মনোযোগ সহকারে
				পড়ুন।
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					এই ফর্মটি ইভেন্টের জন্য নির্ধারিত <strong>চক্র প্রতিনিধি</strong>{" "}
					দ্বারা পূরণ করতে হবে।
				</li>

				<li>
					একটি চক্র ইভেন্টে <strong>একাধিক স্টল</strong> পরিচালনা করতে পারে।
					রেজিস্ট্রেশনের সময় প্রতিটি স্টলকে তার নির্দিষ্ট বিবরণ সহ পৃথকভাবে যোগ
					করতে হবে।
				</li>

				<li>
					সকল ফুড স্টলগুলির জন্য <strong>300 KKD</strong> ভিত্তিক ফি প্রযোজ্য।
					আপনার স্টল থেকে অর্জিত <strong>100% লাভ</strong> দান করার মাধ্যমে আপনি
					বিভাগকে সমর্থন করতে পারেন, যা এই ইভেন্টের সাফল্যে উল্লেখযোগ্য ভূমিকা
					রাখবে। অথবা, আপনি লাভের <strong>50% নিজে রাখতে পারেন</strong> এবং বাকি
					50% বিভাগকে দিতে পারেন।
				</li>

				<li>
					প্রতিটি রেজিস্ট্রেশনের জন্য স্টলের ধরন বেছে নিতে হবে এবং{" "}
					<strong>স্টল ইন-চার্জ</strong> এর বিস্তারিত প্রদান করতে হবে।
				</li>

				<li>
					ফর্ম জমা দেওয়ার পর, আমরা আপনার প্রদত্ত বিবরণগুলি পরীক্ষা করে নিশ্চিত
					করব। আপনার স্টল রেজিস্ট্রেশনের নিশ্চিতকরণ ফোন কলের মাধ্যমে আপনাকে
					জানানো হবে।
				</li>

				<li>
					ইভেন্টে সবচেয়ে ভাল পারফরম্যান্স করা <strong>শীর্ষ 3 স্টল</strong>{" "}
					বিশেষ পুরস্কার পাবে।
				</li>
			</ol>

			<p className="mt-6 font-semibold">
				রেজিস্ট্রেশন চালিয়ে যাওয়ার মাধ্যমে, আপনি এই শর্তাবলী মেনে নিচ্ছেন।
			</p>
		</>
	);

	const TnBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				பதிவு செய் ஆரம்பிக்கும் முன், தயவுசெய்து கீழே கொடுக்கப்பட்டுள்ள
				விதிமுறைகள் மற்றும் நிபந்தனைகளை கவனமாகப் படியுங்கள்.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					இந்த படிவம் நிகழ்ச்சிக்கான <strong>சக்கர பிரதிநிதியால்</strong>{" "}
					நிரப்பப்பட வேண்டும்.
				</li>

				<li>
					ஒரு சக்கரம் <strong>ஒரு க்கும் மேற்பட்ட ஸ்டால்களை</strong> நடத்தலாம்.
					ஒவ்வொரு ஸ்டால் தகுந்த விவரங்களுடன் தனித்தனியாக சேர்க்கப்பட வேண்டும்.
				</li>

				<li>
					அனைத்து உணவுக் ஸ்டால்களுக்கும் <strong>300 KKD</strong> அடிப்படை
					கட்டணம் விதிக்கப்படும். நீங்கள் உங்கள் ஸ்டாலில் இருந்து கிடைக்கும்{" "}
					<strong>100% லாபத்தை</strong> தானமாக வழங்கலாம் அல்லது{" "}
					<strong>50% உங்களுக்காக வைத்துக் கொள்ளலாம்</strong> மற்றும் 50%
					துறைக்கு வழங்கலாம்.
				</li>

				<li>
					ஒவ்வொரு ஸ்டாலுக்காக <strong>ஸ்டால் பொறுப்பாளர்</strong> விவரங்களை
					வழங்கவும்.
				</li>

				<li>
					படிவத்தைச் சமர்ப்பித்தவுடன், உங்கள் விவரங்களை நாங்கள் சரிபார்த்து
					உறுதிப்படுத்துவோம். உங்கள் ஸ்டால் பதிவு தொடர்பாக உங்களுக்கு ஒரு
					தொலைபேசி அழைப்பு மூலம் தகவல் வழங்கப்படும்.
				</li>

				<li>சிறந்த 3 ஸ்டால்களுக்கு சிறப்பு பரிசுகள் வழங்கப்படும்.</li>
			</ol>

			<p className="mt-6 font-semibold">
				பதிவு செய்ய எடுத்து செல்லும்போது, நீங்கள் இவை ஒப்புக்கொள்கிறீர்கள்.
			</p>
		</>
	);

	const MlBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				രജിസ്ട്രേഷൻ ആരംഭിക്കുന്നതിന് മുമ്പ് ദയവായി ഈ വ്യവസ്ഥകളും നിബന്ധനകളും
				ശ്രദ്ധിച്ചു വായിക്കുക.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ഈ ഫോർം പരിപാടിക്കായി <strong>ചക്രയുടെ പ്രതിനിധി</strong>{" "}
					പൂരിപ്പിക്കേണ്ടതാണ്.
				</li>

				<li>
					ഓരോ ചക്രയ്ക്കും ഈ ഈവന്റിനായി{" "}
					<strong> ഒന്നോ അതിൽ കൂടുതലോ സ്റ്റാളുകൾ</strong>പ്രവർത്തിക്കാൻ
					കഴിയുന്നതാണ് രജിസ്ട്രേഷൻ സമയത്ത് ഓരോ സ്റ്റാളിന്റെയും വിശദാംശങ്ങൾ
					പ്രത്യേകം ചേർക്കേണ്ടതാണ്.
				</li>

				<li>
					എല്ലാ ഭക്ഷണ സ്റ്റാളുകൾക്കും <strong>300 KKD</strong> അടിസ്ഥാന ഫീസ്
					ആകുന്നു. നിങ്ങൾ <strong>നിങ്ങളുടെ ലാഭത്തിന്റെ 100%</strong> കീർത്തന
					സേവയ്ക്കായി സമർപ്പിക്കാവുന്നതാണ് അല്ലെങ്കിൽ നിങ്ങള്ക്ക്{" "}
					<strong>50% സമ്പാദിക്കുനവതാണ് ആണ് </strong> (മിച്ചം കീർത്തന
					സേവയ്ക്കായി ഉപയോഗിക്കുന്നതാണ്)
				</li>

				<li>
					ഓരോ സ്റ്റാളിനും <strong>സ്റ്റാൾ ഇൻചാർജിൻ്റെ </strong> വിവരങ്ങൾ
					നൽകേണ്ടതാണ്.
				</li>

				<li>
					ഫോമുകൾ സമർപ്പിച്ച ശേഷം, നാം സമർപ്പിച്ച വിവരങ്ങൾ പരിശോദിക്കുന്നതാണ് .
					ഫോൺ കോളിലൂടെ നിങ്ങളുടെ സ്റ്റാൾ രജിസ്ട്രേഷൻ സ്ഥിരീകരണം നൽകുകയും
					ചെയ്യുന്നതാണ്.
				</li>

				<li>മികച്ച 3 സ്റ്റാളുകൾക്ക് പ്രത്യേക സമ്മാനങ്ങൾ ലെഭിക്കുന്നതാണ് .</li>
			</ol>

			<p className="mt-6 font-semibold">
				രജിസ്ട്രേഷൻ തുടരുന്നതിലൂടെ, നിങ്ങൾ ഈ വ്യവസ്ഥകളും നിബന്ധനകളും
				ആംഗീകരിക്കുന്നതായി കണക്കാക്കപെടുന്നതാണ്
			</p>
		</>
	);

	const TeBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				రిజిస్ట్రేషన్ కొనసాగించే ముందు దయచేసి ఈ నిబంధనలు మరియు షరతులు జాగ్రత్తగా
				చదవండి.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ఫారమ్ <strong>చక్ర తరపున ప్రతినిధి</strong> పూరించాలి.
				</li>

				<li>
					ఒక చక్ర ఈవెంట్ లో <strong>ఒకటి కంటే ఎక్కువ స్టాల్లు</strong>{" "}
					నిర్వహించవచ్చు. రిజిస్ట్రేషన్ సమయంలో ప్రతి స్టాల్ వివరణలను వేర్వేరుగా
					తెలియపరచాలి
				</li>

				<li>
					అన్ని ఫుడ్ స్టాల్లకు <strong>300 KKD</strong> ప్రాథమిక రుసుము ఉంటుంది.
					మీరు <strong>100% లాభాన్ని</strong> కీర్తన విభాగానికి విరాళంగా
					ఇవ్వవచ్చు లేదా <strong>50% మీ దగ్గర ఉంచుకోవచ్చు</strong>.
				</li>

				<li>
					ప్రతి స్టాల్ యొక్క వివరాలు మరియు <strong>స్టాల్ ఇన్-చార్జ్</strong>{" "}
					వివరాలను ఇవ్వాలి.
				</li>

				<li>
					ఫారం సమర్పించిన తర్వాత, మీ వివరాలను పరిశీలించి ధృవీకరిస్తాం. మీ స్టాల్
					రిజిస్ట్రేషన్ ధృవీకరణ ఫోన్ ద్వారా తెలియజేయబడుతుంది.
				</li>

				<li>
					ఈవెంట్‌లో అత్యుత్తమ ప్రదర్శన ఇచ్చిన <strong>టాప్ 3 స్టాల్లకు</strong>{" "}
					ప్రత్యేక బహుమతులు అందజేయబడతాయి.
				</li>
			</ol>

			<p className="mt-6 font-semibold">
				రిజిస్ట్రేషన్ కొనసాగించడం ద్వారా మీరు ఈ నిబంధనలు మరియు షరతులను
				అంగీకరిస్తున్నారు.
			</p>
		</>
	);

	const languageBlock: { [key: string]: JSX.Element } = {
		en: <EnglishBlock />,
		"kn-IN": <KnBlock />,
		"hi-IN": <HiBlock />,
		"bn-IN": <BnBlock />,
		"ta-IN": <TnBlock />,
		"ml-IN": <MlBlock />,
		"te-IN": <TeBlock />,
	};
	// "kn-IN",
	// "hi-IN",
	// "bn-IN",
	// "ta-IN",
	// "ml-IN",
	// "te-IN",}

	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-slate-900">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={() => router.push("/")}
				>
					<MdArrowBack />
				</button>
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<Image
						src="/images/header-logo.png"
						alt="Kirtan-Ruci-2024"
						width={250}
						height={0}
						className="mx-auto my-3"
					/>
				</div>
				<div className="col-start-3 flex items-center justify-end px-4">
					<ChangeLang select={true} />
				</div>
			</div>
			<div className="max-w-2xl mx-auto w-full h-myscreen flex flex-col text-center">
				<div className="max-w-2xl m-4 mt-6 p-4 flex flex-col gap-2 justify-center md:p-6 lg:p-8 bg-white rounded shadow">
					<h1 className="text-lg font-bold text-center mb-6">{t("tnc")}</h1>
					{languageBlock[locale] || <p>Language not supported</p>}
					<button
						onClick={navigateToRegistration}
						className="w-full flex gap-2 mt-6 items-center justify-center bg-slate-800 text-white py-2 px-4 rounded"
					>
						{loading ? (
							<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
						) : null}
						<span>{t("agree_continue")}</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Page;
