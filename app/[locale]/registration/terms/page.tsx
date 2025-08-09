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
		router.push("/registration");
	};

	const EnglishBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				Please read the following terms and conditions carefully before
				proceeding with registration.
			</p>

			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					Registration fees for the event are <strong>5 KKD</strong> per
					individual aged <strong>10 years and above</strong>.
				</li>

				<li>
					You can register either as an individual or include your family
					members in the registration form. Each family member aged 10 and above
					must also pay the <strong>5 KKD</strong> registration fee.
				</li>

				<li>
					A <strong>payment card</strong> will be provided to each registered
					attendee at the event, which can be used for purchases at all the
					stalls.
				</li>

				<li>
					Along with the registration fee, we will collect an additional{" "}
					<strong>5 KKD</strong> during registration, which will be preloaded
					onto your payment card.
				</li>

				<li>
					You have the option to increase the card balance to{" "}
					<strong>10 KKD, 20 KKD, or 30 KKD</strong> during registration. You
					also can top up your card at designated counters on the day of the
					event.
				</li>

				<li>
					Once your registration is complete, we will verify your details. Upon
					receiving confirmation of your payment to your chakrapati, a
					confirmation email will be sent to you. Please ensure that you present
					this <strong>registered email ID</strong> at the event to collect your
					payment card, along with the cards of any registered family members.
				</li>

				<li>
					Additional top-ups can be made at the event at{" "}
					<strong>top-up counters</strong> available at the venue.
				</li>

				<li>
					Attendees are responsible for the security of their payment cards. In
					the event of loss, please notify the event organizers immediately,
					although refunds for lost balances cannot be guaranteed.
				</li>
				<li>
					Access is strictly limited to <strong>registered participants</strong>
					. All attendees, including kirtaniyas arriving for time slots other
					than their own, must complete registration. The only exceptions are
					sevakas and kirtaniyas scheduled to perform during the time slot. This
					requirement also applies to the family members of both sevakas and
					kirtaniyas, they are also <strong>required to register</strong>. Your
					cooperation in adhering to this policy ensures a smooth and organized
					event for everyone.
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
				ದಾಖಲೆ ಮಾಡಲು ಮುಂದುವರಿಯುವ ಮೊದಲು, ದಯವಿಟ್ಟು ಈ ಶರತ್ತು ಮತ್ತು ನಿರ್ಧಾರಗಳನ್ನು
				ಗಮನದಿಂದ ಓದಿ.
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ಈವೆಂಟ್‌ಗೆ ನೋಂದಣಿ ಶುಲ್ಕವು 10 ವರ್ಷ ಮತ್ತು ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಯಸ್ಸಿನ ಪ್ರತಿ
					ವ್ಯಕ್ತಿಗೆ 5 KKD ಆಗಿದೆ.
				</li>
				<li>
					ನೀವು ವ್ಯಕ್ತಿಯಾಗಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬಹುದು ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬ ಸದಸ್ಯರನ್ನು
					ನೋಂದಣಿ ಫಾರ್ಮ್‌ನಲ್ಲಿ ಸೇರಿಸಿಕೊಳ್ಳಬಹುದು. 10 ವರ್ಷ ಮತ್ತು ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ
					ವಯಸ್ಸಿನ ಪ್ರತಿ ಕುಟುಂಬ ಸದಸ್ಯರೂ 5 KKD ನೋಂದಣಿ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಬೇಕು.
				</li>
				<li>
					ಈವೆಂಟ್‌ನಲ್ಲಿ ಪ್ರತಿ ನೋಂದಣಿದಾರರಿಗೆ ಪಾವತಿ ಕಾರ್ಡ್ ಒದಗಿಸಲಾಗುತ್ತದೆ, ಇದನ್ನು
					ಆಹಾರ ಸ್ಟಾಲ್‌ಗಳಲ್ಲಿ ಖರೀದಿಗೆ ಬಳಸಬಹುದು
				</li>
				<li>
					ನೋಂದಣಿ ಶುಲ್ಕದ ಜೊತೆಗೆ, ನೋಂದಣಿಯ ಸಮಯದಲ್ಲಿ ನಾವು ಹೆಚ್ಚುವರಿ 5 KKD
					ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಇದು ನಿಮ್ಮ ಪಾವತಿ ಕಾರ್ಡ್‌ಗೆ ಪ್ರೀಲೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ.
				</li>
				<li>
					ನೋಂದಣಿಯ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಕಾರ್ಡ್ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು 10 KKD, 20 KKD ಅಥವಾ 30
					KKD ಗೆ ಹೆಚ್ಚಿಸುವ ಆಯ್ಕೆಯನ್ನು ನೀವು ಹೊಂದಿದ್ದೀರಿ. ನೀವು ಈವೆಂಟ್ ದಿನದಂದು
					ನಿಗದಿತ ಕೌಂಟರ್‌ಗಳಲ್ಲಿ ನಿಮ್ಮ ಕಾರ್ಡ್ ಟಾಪ್ ಅಪ್ ಮಾಡಬಹುದು.
				</li>
				<li>
					ನಿಮ್ಮ ನೋಂದಣಿ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಾವು ಪರಿಶೀಲಿಸುತ್ತೇವೆ.
					ನಿಮ್ಮ ಚಕ್ರಪತಿಯಿಂದ ನಿಮ್ಮ ಪಾವತಿಯ ದೃಢೀಕರಣವನ್ನು ಸ್ವೀಕರಿಸಿದ ನಂತರ, ನಿಮಗೆ
					ದೃಢೀಕರಣ ಇಮೇಲ್ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ದಯವಿಟ್ಟು ಈವೆಂಟ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪಾವತಿ
					ಕಾರ್ಡ್ ಅನ್ನು ಸಂಗ್ರಹಿಸಲು ಈ ನೋಂದಾಯಿತ ಇಮೇಲ್ ಐಡಿಯನ್ನು ಪ್ರಸ್ತುತಪಡಿಸಿ,
					ಜೊತೆಯಲ್ಲಿ ನೋಂದಾಯಿತ ಕುಟುಂಬ ಸದಸ್ಯರ ಕಾರ್ಡ್‌ಗಳನ್ನೂ ಸಹ
				</li>
				<li>
					ಈವೆಂಟ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಟಾಪ್-ಅಪ್ ಕೌಂಟರ್‌ಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ
					ಟಾಪ್-ಅಪ್‌ಗಳನ್ನು ಮಾಡಬಹುದು.
				</li>
				<li>
					ಕಳೆದುಹೋದ ಪಾವತಿ ಕಾರ್ಡ್‌ಗಳ ಭದ್ರತೆಗೆ ಆಯೋಜಕರು ಜವಾಬ್ದಾರರಲ್ಲ. ಕಳೆದುಹೋದರೆ,
					ದಯವಿಟ್ಟು ತಕ್ಷಣವೇ ಈವೆಂಟ್ ಆಯೋಜಕರಿಗೆ ತಿಳಿಸಿ, ಆದರೂ ಕಳೆದುಹೋದ
					ಬ್ಯಾಲೆನ್ಸ್‌ಗಳಿಗೆ ಮರುಪಾವತಿಯನ್ನು ಖಾತರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ
				</li>
				<li>
					ತಮ್ಮ ನಿರ್ಧಾರಿತ ಸಮಯವನ್ನು ಹೊರತು, ಬೇರೆ ಯಾವುದೇ ಸಮಯಕ್ಕೆ ಬರುವ ವ್ಯಕ್ತಿಗಳು,
					ಕೀರ್ತನೀಯರೊಂದಿಗೆ, ಪ್ರತಿಯೊಬ್ಬರು ಕಡ್ಡಾಯವಾಗಿ ನೋಂದಾಯಿಸಬೇಕು. ತಮ್ಮ ನಿರ್ಧರಿತ
					ಸಮಯದಲ್ಲಿ ಬರುವಾಗ ಸೇವಕರಿಗೆ ಮತ್ತು ಕೀರ್ತನೀಯರಿಗೆ ನೋಂದಾಯಿಸುವ ಅವಶ್ಯಕತೆ ಇಲ್ಲ.
					ಕೀರ್ತನೀಯ ಮತ್ತು ಸೇವಕರ ಕುಟುಂಬದವರು ಕಡ್ಡಾಯವಾಗಿ ನೋಂದಾಯಿಸಬೇಕು. ನಿಮ್ಮ ನಿಯಮಗಳ
					ಪಾಲನೆಯು ಈ ಕಾರ್ಯಕ್ರಮವನ್ನು ಸುಸಂಗತವಾಗಿ ನಡೆಯಲು ಸಹಕಾರ ನೀಡುತ್ತದೆ.
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				ನೋಂದಣಿಗೆ ಮುಂದುವರಿಯುವ ಮೂಲಕ, ನೀವು ಈ ಶರತ್ತು ಮತ್ತು ನಿರ್ಧಾರಗಳಿಗೆ ಒಪ್ಪುತ್ತೀರಿ.
			</p>
		</>
	);

	const HiBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				रजिस्ट्रेशन से पहले कृपया निम्नलिखित शर्तों और नियमों को ध्यान से पढ़ें।
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					इवेंट के लिए रजिस्ट्रेशन लक्ष्मी प्रति व्यक्ति 10 वर्ष और उससे अधिक
					उम्र के लिए 5 KKD है।
				</li>
				<li>
					आप व्यक्तिगत रूप से रजिस्ट्रेशन कर सकते हैं या अपने परिवार के सदस्यों
					को रजिस्ट्रेशन फॉर्म में शामिल कर सकते हैं। 10 वर्ष और उससे अधिक उम्र
					के प्रत्येक परिवार के सदस्य को भी 5 KKD रजिस्ट्रेशन लक्ष्मी का भुगतान
					करना होगा।
				</li>
				<li>
					प्रत्येक व्यक्ति को एक कार्ड प्राप्त होगा जिसका उपयोग खाद्य स्टालों पर
					खरीदारी के लिए किया जा सकता है
				</li>
				<li>रजिस्ट्रेशन के बाद आपके कार्ड में 5 KKD का बैलेंस होगा</li>
				<li>
					रजिस्ट्रेशन के दौरान आप अपने कार्ड का बैलेंस 10 KKD, 20 KKD या 30 KKD
					तक बढ़ाने का विकल्प चुन सकते हैं। आप इवेंट के दिन निर्दिष्ट काउंटरों
					पर भी अपना कार्ड टॉप अप कर सकते हैं।
				</li>
				<li>
					आपका रजिस्ट्रेशन पूरा होने के बाद, हम आपके विवरण सत्यापित करेंगे। आपके
					चक्रपति को आपके लक्ष्मी की पुष्टि प्राप्त करने पर, आपको एक पुष्टिकरण
					ईमेल भेजा जाएगा। कृपया इवेंट में अपना कार्ड प्राप्त करने के लिए इस
					दर्ज कराई ईमेल आईडी को प्रस्तुत करें, साथ ही पंजीकृत परिवार के सदस्यों
					के कार्ड भी।
				</li>
				<li>
					इवेंट में उपलब्ध टॉप-अप काउंटरों पर अतिरिक्त टॉप-अप किया जा सकता है।
				</li>
				<li>
					कार्ड की सुरक्षा के लिए उपस्थित व्यक्ति जिम्मेदार हैं। हानि की स्थिति
					में, कृपया तुरंत इवेंट आयोजकों को सूचित करें, हालांकि खोए हुए शेष राशि
					के लिए धनवापसी की गारंटी नहीं दी जा सकती।
				</li>
				<li>
					केवल रजिस्टर किये गए को प्रवेश की अनुमति होगी। अपने स्वयं के समय स्लॉट
					के अलावा आने वाले सभी उपस्थित लोगों, कीर्तनिया सहित, को रजिस्ट्रेशन
					पूरा करना होगा। केवल सेवक और कीर्तनिया, जो समय स्लॉट के दौरान प्रदर्शन
					करने के लिए निर्धारित हैं, ही अपवाद हैं। यह आवश्यकता सेवक और कीर्तनिया
					दोनों के परिवार के सदस्यों पर भी लागू होती है, उन्हें भी रजिस्ट्रेशन
					करना आवश्यक है। इस नीति का पालन करने में आपका सहयोग सभी के लिए एक
					सुचारू और संगठित कार्यक्रम सुनिश्चित करता है।
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				रजिस्ट्रेशन के साथ आगे बढ़ने पर, आप इन शर्तों और नियमों से सहमत होते
				हैं।
			</p>
		</>
	);

	const BnBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				নিবন্ধনের আগে দয়া করে নিম্নলিখিত শর্তাবলী এবং নিয়মগুলি মনোযোগ দিয়ে
				পড়ুন।
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ইভেন্টের জন্য রেজিস্ট্রেশন ফি প্রতি ব্যক্তির জন্য ১০ বছর এবং তার উপরে
					৫ KKD।
				</li>
				<li>
					আপনি ব্যক্তি হিসাবে রেজিস্ট্রেশন করতে পারেন অথবা আপনার পরিবারের
					সদস্যদের রেজিস্ট্রেশন ফর্মে অন্তর্ভুক্ত করতে পারেন। ১০ বছর এবং তার
					উপরের প্রতি পরিবারের সদস্যকেও ৫ KKD রেজিস্ট্রেশন ফি দিতে হবে।
				</li>
				<li>
					ইভেন্টে প্রতিটি রেজিস্টার্ড অ্যাটেন্ডির জন্য একটি পেমেন্ট কার্ড প্রদান
					করা হবে, যা খাবার স্টলগুলিতে কেনাকাটা করার জন্য ব্যবহার করা যেতে পারে।
				</li>
				<li>
					রেজিস্ট্রেশন ফির সাথে, রেজিস্ট্রেশনের সময় আমরা অতিরিক্ত ৫ KKD সংগ্রহ
					করব, যা আপনার পেমেন্ট কার্ডে প্রিলেড করা হবে।
				</li>
				<li>
					রেজিস্ট্রেশনের সময় আপনার কার্ডের ব্যালেন্স ১০ KKD, ২০ KKD বা ৩০
					KKD-তে বাড়ানোর বিকল্প রয়েছে। আপনি ইভেন্টের দিন নির্দিষ্ট
					কাউন্টারগুলিতেও আপনার কার্ড টপ আপ করতে পারেন।
				</li>
				<li>
					আপনার রেজিস্ট্রেশন সম্পূর্ণ হলে, আমরা আপনার বিশদগুলি যাচাই করব। আপনার
					চক্রপতির কাছে আপনার পেমেন্টের নিশ্চয়তা পেলে, একটি নিশ্চয়তা ইমেল
					আপনাকে পাঠানো হবে। দয়া করে ইভেন্টে আপনার পেমেন্ট কার্ড সংগ্রহ করার
					জন্য এই নিবন্ধিত ইমেল আইডিটি উপস্থাপন করুন, পাশাপাশি নিবন্ধিত পরিবারের
					সদস্যদের কার্ডগুলিও।
				</li>
				<li>
					ইভেন্টে উপলব্ধ টপ-আপ কাউন্টারগুলিতে অতিরিক্ত টপ-আপ করা যেতে পারে।
				</li>
				<li>
					পেমেন্ট কার্ডের নিরাপত্তার জন্য অ্যাটেন্ডাররা দায়ী। হারিয়ে গেলে,
					দয়া করে অবিলম্বে ইভেন্টের আয়োজকদের অবহিত করুন, যদিও হারিয়ে যাওয়া
					ব্যালেন্সের জন্য রিফান্ড নিশ্চিত করা যাবে না।
				</li>
				<li>
					অ্যাক্সেস কঠোরভাবে নিবন্ধিত অংশগ্রহণকারীদের জন্য সীমাবদ্ধ। নিজের সময়
					স্লট ছাড়া আগমনকারী সকল অ্যাটেন্ডি, কীর্তনীয়া সহ, রেজিস্ট্রেশন
					সম্পূর্ণ করতে হবে। শুধুমাত্র সেবক এবং কীর্তনীয়া, যারা সময় স্লটের
					সময় পারফর্ম করার জন্য নির্ধারিত, তারাই ব্যতিক্রম। এই প্রয়োজনীয়তা
					সেবক এবং কীর্তনীয়া উভয়ের পরিবারের সদস্যদের জন্যও প্রযোজ্য, তাদেরও
					রেজিস্ট্রেশন করতে হবে। এই নীতি মেনে চলার ক্ষেত্রে আপনার সহযোগিতা সকলের
					জন্য একটি সুষ্ঠু এবং সংগঠিত ইভেন্ট নিশ্চিত করে।
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				নিবন্ধনের সাথে এগিয়ে যাওয়ার মাধ্যমে, আপনি এই শর্তাবলী এবং নিয়মাবলীর
				সাথে সম্মত হন।
			</p>
		</>
	);

	const TnBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				பதிவு செய்யுமுன் கீழ்கண்ட விதிமுறைகள் மற்றும் நிபந்தனைகளை கவனமாக
				படிக்கவும்.
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					நிகழ்வுக்கான பதிவு கட்டணம் 10 வயது மற்றும் அதற்கு மேற்பட்ட ஒவ்வொரு
					நபருக்கும் 5 KKD ஆகும்.
				</li>
				<li>
					நீங்கள் தனிப்பட்ட முறையில் பதிவு செய்யலாம் அல்லது உங்கள் குடும்ப
					உறுப்பினர்களை பதிவு படிவத்தில் சேர்க்கலாம். 10 வயது மற்றும் அதற்கு
					மேற்பட்ட ஒவ்வொரு குடும்ப உறுப்பினரும் 5 KKD பதிவு கட்டணம் செலுத்த
					வேண்டும்.
				</li>
				<li>
					நிகழ்வில் பதிவு செய்த ஒவ்வொரு கலந்து கொள்பவருக்கும் ஒரு கட்டண அட்டை
					வழங்கப்படும், இது உணவு கடைகளில் வாங்க பயன்படுத்தப்படும்.
				</li>
				<li>
					பதிவு கட்டணத்துடன், பதிவு சமயத்தில் நாங்கள் கூடுதலாக 5 KKD
					வசூலிப்போம், இது உங்கள் கட்டண அட்டையில் முன்கூட்டியே ஏற்றப்படும்.
				</li>
				<li>
					நீங்கள் பதிவு சமயத்தில் கார்டு மதிப்பை 10 KKD, 20 KKD அல்லது 30 KKD ஆக
					அதிகரிக்கும் விருப்பம் உள்ளது. நீங்கள் நிகழ்வு நடைபெறும் நாளில்
					குறிப்பிட்ட கவுண்டர்களில் உங்கள் கார்டை ரீசார்ஜ் செய்யலாம்.
				</li>
				<li>
					உங்கள் பதிவு முடிந்ததும், நாங்கள் உங்கள் விவரங்களை சரிபார்க்கிறோம்.
					உங்கள் சக்கரபதிக்கு பணம் செலுத்தியதற்கான உறுதிப்படுத்தல் கிடைத்ததும்,
					உங்களுக்கு உறுதிப்படுத்தல் மின்னஞ்சல் அனுப்பப்படும். உங்கள் கட்டண
					அட்டையைப் பெறவும், பதிவு செய்த குடும்ப உறுப்பினர்களின் அட்டைகளுடன்
					நிகழ்வில் இந்த பதிவு செய்யப்பட்ட மின்னஞ்சல் ஐடியை நீங்கள் வழங்குவதை
					உறுதி செய்யவும்.
				</li>
				<li>
					நிகழ்வில் நடைபெறும் டாப்-அப் கவுண்டர்களில் கூடுதல் டாப்-அப் செய்யலாம்.
				</li>
				<li>
					கட்டண அட்டைகளின் பாதுகாப்புக்கு கலந்து கொள்பவர்கள் பொறுப்பானவர்கள்.
					இழந்தால், உடனடியாக நிகழ்வு ஏற்பாட்டாளர்களுக்கு தெரிவிக்கவும், ஆனால்
					இழந்த மதிப்புகளுக்கு மறுபணம் வழங்க முடியாது.
				</li>
				<li>
					பதிவு செய்த பங்கேற்பாளர்களுக்கு மட்டுமே அணுகல் கண்டிப்பாக
					வரையறுக்கப்பட்டுள்ளது. தங்கள் சொந்த நேர இடைவெளிகளுக்கு வருபவர்கள்
					உட்பட அனைத்து கலந்து கொள்பவர்களும் பதிவு செய்ய வேண்டும்.
					விதிவிலக்குகள் சேவகர்கள் மற்றும் அந்த நேர இடைவெளியில் நிகழ்த்துவதற்கு
					திட்டமிடப்பட்ட கீர்த்தனியர்கள் மட்டுமே. இந்த தேவையும் சேவகர்கள்
					மற்றும் கீர்த்தனியர்களின் குடும்ப உறுப்பினர்களுக்கும் பொருந்தும்,
					அவர்களும் பதிவு செய்ய வேண்டும். இந்த கொள்கையை பின்பற்ற உங்கள்
					ஒத்துழைப்பு அனைவருக்கும் ஒரு சீரான மற்றும் ஒழுங்கான நிகழ்வை உறுதி
					செய்கிறது.
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				பதிவு செய்வதற்கு முன்னேறுவதற்காக, நீங்கள் இந்த விதிமுறைகளையும்
				நிபந்தனைகளையும் ஒப்புக்கொள்கிறீர்கள்.
			</p>
		</>
	);

	const MlBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				രജിസ്ട്രേഷൻ ആരംഭിക്കുന്നതിന് മുമ്പ് ദയവായി താഴെക്കാണുന്ന വ്യവസ്ഥകളും
				നിബന്ധനകളും ശ്രദ്ധിച്ച് വായിക്കുക.
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ഇവന്റിന് <strong>10 വയസ്സോ അതിൽ കൂടുതലോ പ്രായമുള്ളവർക്ക് </strong>
					രജിസ്ട്രേഷൻ ഫീസ് <strong>5 KKD</strong> ആണ്.
				</li>
				<li>
					നിങ്ങൾക് ഒറ്റയ്‌ക്കോ കുടുംബാംഗങ്ങളുമായോ രജിസ്റ്റർ ചെയാവുന്നത് ആണ് 10
					വയസോ അതിൽ കൂടുതലോ പ്രായമുള്ള ഓരോ കുടുംബ അംഗവും <strong>5 KKD</strong>{" "}
					രജിസ്ട്രേഷൻ ഫീസ് നൽകേണ്ടതാണ്
				</li>
				<li>
					രജിസ്റ്റർ ചെയ്‌ത ഓരോ വ്യക്തിക്കും{" "}
					<strong>ഒരു പേയ്മെന്റ് കാർഡ്</strong> പരിപാടിയുടെ സമയത്തു നൽകുന്നതാണ്.
					ഇത് പ്രസാദം വാങ്ങാനായിട്ടു ഉപയോഗിക്കാവുന്നതാണ്.
				</li>
				<li>
					രജിസ്ട്രേഷൻ ഫീസിന് പുറമെ, ഒരു <strong>5 KKD</strong> കൂടി
					ശേകരിക്കുന്നതാണ്. ഇത് നിങ്ങളുടെ പേയ്മെന്റ് കാർഡിൽ ബാലൻസ് ആയി
					ലെഭിക്കുന്നതാണ്.
				</li>
				<li>
					രജിസ്ട്രേഷൻ സമയത്ത് നിങ്ങൾക്ക് കാർഡ് ബാലൻസ്{" "}
					<strong>10 KKD, 20 KKD, അല്ലെങ്കിൽ 30 KKD</strong> യായി വർധിപ്പിക്കാൻ
					കഴിയുന്നതാണ്. അതല്ലെങ്കിൽ, പരിപാടിയുടെ സമയത്ത്, കൗണ്ടറുകളിൽ നിങ്ങളുടെ
					കാർഡ് ടോപ് ചെയ്യാനും കഴിയും.
				</li>
				<li>
					നിങ്ങളുടെ രജിസ്ട്രേഷൻ പൂർത്തിയാക്കിയതിനു ശേഷം, ഞങ്ങൾ നിങ്ങളുടെ
					വിശദാംശങ്ങൾ സ്ഥിതികരിക്കുന്നതാണ്. നിങ്ങളുടെ ചക്രപതിയുടെ പണമിടപാടിന്റെ
					സ്ഥിരീകരണത്തെക്കുറിച്ച്, നിങ്ങൾക്ക് ഒരു സ്ഥിരീകരണ ഇമെയിൽ അയക്കാം. ഈ{" "}
					<strong> രജിസ്റ്റർ ചെയ്ത ഇമെയിൽ ഐഡി</strong> പരിപാടിയിൽ
					അവതരിപ്പിക്കേണ്ടതാണ്
				</li>
				<li>
					ഇവന്റിൽ <strong>ടോപ്-അപ്പ് കൗണ്ടറുകളിൽ</strong> അധിക ടോപ്-അപ്പുകൾ
					നടത്താം.
				</li>
				<li>
					പങ്കെടുത്തവർ അവരുടെ പണമിടപാട് കാർഡുകളുടെ സുരക്ഷയ്ക്ക് ഉത്തരവാദികൾ ആണ്.
					നഷ്ടം സംഭവിച്ചാൽ, ദയവായി ഇവന്റ് സംഘാടകരെ ഉടനെ അറിയിക്കുക. പക്ഷേ
					നഷ്ടമായ ബാലൻസ് തിരിച്ചു നൽകാൻ കഴിയുന്നതല്ല.
				</li>
				<li>
					പ്രവേശനം കർശനമായും <strong> രജിസ്റ്റർ ചെയ്ത പങ്കാളികൾക്ക്</strong>{" "}
					മാത്രമേ ലഭ്യം ആവുകയുള്ളൂ. അവരുടെ സമയത്തിന് പുറത്തുവരുന്ന ഈ ആവശ്യവും
					സേവകരുടെയും കീര്ത്തനികളുടെ കുടുംബാംഗങ്ങൾക്കും ബാധകമാണ്. ഈ പരിപാടിയുടെ
					വിജയത്തിന് നിങ്ങൾ എവറയുടെയും സഹകരണം വളരെ അധികം പ്രാധാന്യം ഉള്ളതാണ്
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				രജിസ്ട്രേഷനുമായി മുന്നോട്ട് പോയാൽ, നിങ്ങൾ ഈ വ്യവസ്ഥകളും നിബന്ധനകളും
				ആംഗീകരിക്കുന്നതായി കണക്കാക്കപെടുന്നതാണ്
			</p>
		</>
	);

	const TeBlock = () => (
		<>
			<p className="text-justify font-semibold py-2">
				రిజిస్ట్రేషన్ కొనసాగించే ముందు, దయచేసి ఈ క్రింది నిబంధనలు మరియు షరతులు
				శ్రద్ధగా చదవండి.
			</p>
			<ol className="list-decimal list-inside space-y-4 text-justify">
				<li>
					ఈ ఈవెంట్‌కు నమోదు ఫీజు 10 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న
					ప్రతి వ్యక్తికి 5 KKD.
				</li>
				<li>
					మీరు వ్యక్తిగతంగా నమోదు చేసుకోవచ్చు లేదా మీ కుటుంబ సభ్యులను నమోదు
					ఫారమ్‌లో చేర్చుకోవచ్చు. 10 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న
					ప్రతి కుటుంబ సభ్యుడు కూడా 5 KKD నమోదు ఫీజు చెల్లించాలి.
				</li>
				<li>
					ఈ ఈవెంట్‌లో నమోదు చేసిన ప్రతి వ్యక్తికి ఒక చెల్లింపు కార్డు
					అందించబడుతుంది, ఇది ఆహార స్టాల్‌లలో కొనుగోళ్లకు ఉపయోగించవచ్చు.
				</li>
				<li>
					నమోదు ఫీజుతో పాటు, నమోదు సమయంలో మేము అదనపు 5 KKD వసూలు చేస్తాము, ఇది
					మీ చెల్లింపు కార్డులో ప్రీలోడ్ చేయబడుతుంది.
				</li>
				<li>
					నమోదు సమయంలో మీ కార్డ్ బ్యాలెన్స్‌ను 10 KKD, 20 KKD లేదా 30 KKDకి
					పెంచే ఎంపిక మీకు ఉంది. మీరు ఈవెంట్ రోజున నిర్దేశించిన కౌంటర్‌ల వద్ద మీ
					కార్డ్ టాప్ అప్ చేయవచ్చు.
				</li>
				<li>
					మీ నమోదు పూర్తి అయిన తర్వాత, మేము మీ వివరాలను ధృవీకరిస్తాము. మీ
					చక్రపతికి మీ చెల్లింపు యొక్క ధృవీకరణను స్వీకరించిన తర్వాత, మీకు
					ధృవీకరణ ఇమెయిల్ పంపబడుతుంది. ఈవెంట్‌లో మీ చెల్లింపు కార్డ్‌ను అలాగే
					నమోదు చేసిన కుటుంబ సభ్యుల కార్డులను సేకరించడానికి ఈ నమోదు చేసిన
					ఇమెయిల్ ID ని తెలియపరచండి
				</li>
				<li>
					ఈవెంట్‌లో అందుబాటులో ఉన్న టాప్-అప్ కౌంటర్‌ల వద్ద అదనపు టాప్-అప్‌లు
					చేయవచ్చు.
				</li>
				<li>
					చెల్లింపు కార్డుల భద్రతకు మీరే బాధ్యులు. కోల్పోయినప్పుడు, దయచేసి
					వెంటనే ఈవెంట్ ఆర్గనైజర్‌లకు తెలియజేయండి, అయినప్పటికీ కోల్పోయిన
					బ్యాలెన్స్‌లకు రిఫండ్ హామీ ఇవ్వబడదు.
				</li>
			</ol>
			<p className="mt-6 font-semibold">
				నమోదు ప్రక్రియను కొనసాగించడం ద్వారా, మీరు ఈ నియమాలు మరియు నిబంధనలను
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
