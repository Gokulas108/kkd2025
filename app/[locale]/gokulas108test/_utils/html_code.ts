export default function getHTMLEmail(slots: any, code: string) {
	return `<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	lang="en"
>
	<head>
		<title></title>
		<meta charset="UTF-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<!--[if !mso]>-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<meta name="x-apple-disable-message-reformatting" content="" />
		<meta content="target-densitydpi=device-dpi" name="viewport" />
		<meta content="true" name="HandheldFriendly" />
		<meta content="width=device-width" name="viewport" />
		<meta
			name="format-detection"
			content="telephone=no, date=no, address=no, email=no, url=no"
		/>
		<style type="text/css">
			table {
				border-collapse: separate;
				table-layout: fixed;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
			table td {
				border-collapse: collapse;
			}
			.ExternalClass {
				width: 100%;
			}
			.ExternalClass,
			.ExternalClass p,
			.ExternalClass span,
			.ExternalClass font,
			.ExternalClass td,
			.ExternalClass div {
				line-height: 100%;
			}
			.gmail-mobile-forced-width {
				display: none;
				display: none !important;
			}
			body,
			a,
			li,
			p,
			h1,
			h2,
			h3 {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
			html {
				-webkit-text-size-adjust: none !important;
			}
			body,
			#innerTable {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			#innerTable img + div {
				display: none;
				display: none !important;
			}
			img {
				margin: 0;
				padding: 0;
				-ms-interpolation-mode: bicubic;
			}
			h1,
			h2,
			h3,
			p,
			a {
				line-height: inherit;
				overflow-wrap: normal;
				white-space: normal;
				word-break: break-word;
			}
			a {
				text-decoration: none;
			}
			h1,
			h2,
			h3,
			p {
				min-width: 100% !important;
				width: 100% !important;
				max-width: 100% !important;
				display: inline-block !important;
				border: 0;
				padding: 0;
				margin: 0;
			}
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}
			u + #body a {
				color: inherit;
				text-decoration: none;
				font-size: inherit;
				font-family: inherit;
				font-weight: inherit;
				line-height: inherit;
			}
			a[href^="mailto"],
			a[href^="tel"],
			a[href^="sms"] {
				color: inherit;
				text-decoration: none;
			}
		</style>
		<style type="text/css">
			@media (min-width: 481px) {
				.hd {
					display: none !important;
				}
			}
		</style>
		<style type="text/css">
			@media (max-width: 480px) {
				.hm {
					display: none !important;
				}
			}
		</style>
		<style type="text/css">
			@media (max-width: 480px) {
				.t100,
				.t103,
				.t105,
				.t9 {
					width: 440px !important;
				}
				.t5,
				.t86 {
					text-align: left !important;
				}
				.t4 {
					vertical-align: top !important;
					width: 600px !important;
				}
				.t43,
				.t49,
				.t61,
				.t67 {
					vertical-align: middle !important;
				}
				.t12,
				.t18,
				.t23,
				.t31,
				.t33 {
					width: 400px !important;
				}
				.t36,
				.t54,
				.t72,
				.t90,
				.t93,
				.t96 {
					width: 360px !important;
				}
				.t50 {
					text-align: right !important;
				}
				.t68,
				.t71,
				.t99 {
					text-align: center !important;
				}
				.t43 {
					width: 500px !important;
				}
				.t39 {
					width: 176px !important;
				}
				.t49 {
					width: 400px !important;
				}
				.t47 {
					padding-left: 5px !important;
					padding-right: 5px !important;
				}
				.t46 {
					margin-right: 0px !important;
				}
				.t45 {
					width: auto !important;
				}
				.t61 {
					width: 720px !important;
				}
				.t57,
				.t75 {
					width: 239.41px !important;
				}
				.t67 {
					width: 264px !important;
				}
				.t79,
				.t85 {
					vertical-align: top !important;
				}
				.t63,
				.t81 {
					width: 72.59px !important;
				}
				.t79 {
					width: 720px !important;
				}
				.t85 {
					width: 264px !important;
				}
				.t99 {
					font-style: italic !important;
				}
			}
		</style>
		<style type="text/css">
			@media (max-width: 480px) {
				[class~="x_t105"] {
					width: 440px !important;
				}
				[class~="x_t9"] {
					width: 440px !important;
				}
				[class~="x_t5"] {
					text-align: left !important;
				}
				[class~="x_t4"] {
					vertical-align: top !important;
					width: 600px !important;
				}
				[class~="x_t33"] {
					width: 400px !important;
				}
				[class~="x_t12"] {
					width: 400px !important;
				}
				[class~="x_t18"] {
					width: 400px !important;
				}
				[class~="x_t23"] {
					width: 400px !important;
				}
				[class~="x_t31"] {
					width: 400px !important;
				}
				[class~="x_t96"] {
					width: 360px !important;
				}
				[class~="x_t93"] {
					width: 360px !important;
				}
				[class~="x_t54"] {
					width: 360px !important;
				}
				[class~="x_t50"] {
					text-align: right !important;
				}
				[class~="x_t43"] {
					vertical-align: middle !important;
					width: 500px !important;
				}
				[class~="x_t39"] {
					width: 176px !important;
				}
				[class~="x_t49"] {
					vertical-align: middle !important;
					width: 400px !important;
				}
				[class~="x_t47"] {
					padding-left: 5px !important;
					padding-right: 5px !important;
				}
				[class~="x_t46"] {
					margin-right: 0px !important;
				}
				[class~="x_t45"] {
					width: auto !important;
				}
				[class~="x_t72"] {
					width: 360px !important;
				}
				[class~="x_t71"] {
					text-align: center !important;
				}
				[class~="x_t68"] {
					text-align: center !important;
				}
				[class~="x_t61"] {
					vertical-align: middle !important;
					width: 720px !important;
				}
				[class~="x_t57"] {
					width: 239.41px !important;
				}
				[class~="x_t67"] {
					vertical-align: middle !important;
					width: 264px !important;
				}
				[class~="x_t63"] {
					width: 72.59px !important;
				}
				[class~="x_t90"] {
					width: 360px !important;
				}
				[class~="x_t86"] {
					text-align: left !important;
				}
				[class~="x_t79"] {
					vertical-align: top !important;
					width: 720px !important;
				}
				[class~="x_t75"] {
					width: 239.41px !important;
				}
				[class~="x_t85"] {
					vertical-align: top !important;
					width: 264px !important;
				}
				[class~="x_t81"] {
					width: 72.59px !important;
				}
				[class~="x_t36"] {
					width: 360px !important;
				}
				[class~="x_t100"] {
					width: 440px !important;
				}
				[class~="x_t99"] {
					font-style: italic !important;
					text-align: center !important;
				}
				[class~="x_t103"] {
					width: 440px !important;
				}
			}
		</style>
		<!--[if !mso]>-->
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@900&amp;family=Lato:ital,wght@0,400;0,700;1,400&amp;family=Inter+Tight:wght@400;700&amp;display=swap"
			rel="stylesheet"
			type="text/css"
		/>
		<!--<![endif]-->
		<!--[if mso]>
			<xml>
				<o:OfficeDocumentSettings>
					<o:AllowPNG />
					<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
			</xml>
		<![endif]-->
	</head>
	<body
		id="body"
		class="t109"
		style="
			min-width: 100%;
			margin: 0px;
			padding: 0px;
			background-color: #e8fcff;
		"
	>
		<div class="t108" style="background-color: #e8fcff">
			<table
				role="presentation"
				width="100%"
				cellpadding="0"
				cellspacing="0"
				border="0"
				align="center"
			>
				<tr>
					<td
						class="t107"
						style="
							font-size: 0;
							line-height: 0;
							mso-line-height-rule: exactly;
							background-color: #e8fcff;
						"
						valign="top"
						align="center"
					>
						<!--[if mso]>
							<v:background
								xmlns:v="urn:schemas-microsoft-com:vml"
								fill="true"
								stroke="false"
							>
								<v:fill color="#E8FCFF" />
							</v:background>
						<![endif]-->
						<table
							role="presentation"
							width="100%"
							cellpadding="0"
							cellspacing="0"
							border="0"
							align="center"
							id="innerTable"
						>
							<tr>
								<td align="center">
									<table
										class="t106"
										role="presentation"
										cellpadding="0"
										cellspacing="0"
										style="margin-left: auto; margin-right: auto"
									>
										<tr>
											<!--[if mso]>
<td width="600" class="t105" style="padding:0 20px 0 20px;">
<![endif]-->
											<!--[if !mso]>-->
											<td
												class="t105"
												style="width: 560px; padding: 0 20px 0 20px"
											>
												<!--<![endif]-->
												<table
													role="presentation"
													width="100%"
													cellpadding="0"
													cellspacing="0"
													style="width: 100% !important"
												>
													<tr>
														<td align="center">
															<table
																class="t10"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t9" style="overflow:hidden;border-radius:14px 14px 0 0;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t9"
																		style="
																			overflow: hidden;
																			width: 560px;
																			border-radius: 14px 14px 0 0;
																		"
																	>
																		<!--<![endif]-->
																		<div
																			class="t8"
																			style="width: 100%; text-align: left"
																		>
																			<div
																				class="t7"
																				style="display: inline-block"
																			>
																				<table
																					class="t6"
																					role="presentation"
																					cellpadding="0"
																					cellspacing="0"
																					align="left"
																					valign="top"
																				>
																					<tr class="t5">
																						<td></td>
																						<td
																							class="t4"
																							width="560"
																							valign="top"
																						>
																							<div
																								class="t1"
																								style="
																									mso-line-height-rule: exactly;
																									mso-line-height-alt: 20px;
																									line-height: 20px;
																									font-size: 1px;
																									display: block;
																								"
																							>
																								&nbsp;&nbsp;
																							</div>
																							<table
																								role="presentation"
																								width="100%"
																								cellpadding="0"
																								cellspacing="0"
																								class="t3"
																								style="width: 100%"
																							>
																								<tr>
																									<td
																										class="t2"
																										style="
																											overflow: hidden;
																											border-radius: 14px 14px 0
																												0;
																										"
																									>
																										<div style="font-size: 0px">
																											<img
																												class="t0"
																												style="
																													display: block;
																													border: 0;
																													height: auto;
																													width: 100%;
																													margin: 0;
																													max-width: 100%;
																												"
																												width="560"
																												height="252.921875"
																												alt=""
																												src="cid:1"
																											/>
																										</div>
																									</td>
																								</tr>
																							</table>
																						</td>
																						<td></td>
																					</tr>
																				</table>
																			</div>
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
													<tr>
														<td align="center">
															<table
																class="t34"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t33" style="background-color:#FFFFFF;padding:20px 20px 20px 20px;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t33"
																		style="
																			background-color: #ffffff;
																			width: 520px;
																			padding: 20px 20px 20px 20px;
																		"
																	>
																		<!--<![endif]-->
																		<table
																			role="presentation"
																			width="100%"
																			cellpadding="0"
																			cellspacing="0"
																			style="width: 100% !important"
																		>
																			<tr>
																				<td align="center">
																					<table
																						class="t13"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="520" class="t12">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t12"
																								style="width: 520px"
																							>
																								<!--<![endif]-->
																								<h1
																									class="t11"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Noto Sans Thai,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 41px;
																										font-weight: 900;
																										font-style: normal;
																										font-size: 35px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: center;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 2px;
																									"
																								>
																									E-Ticket
																								</h1>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t17"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t19"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="520" class="t18">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t18"
																								style="width: 520px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t16"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 400;
																										font-style: normal;
																										font-size: 16px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: center;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 2px;
																									"
																								>
																									Thank you for registering for
																									<span
																										class="t15"
																										style="
																											margin: 0;
																											margin: 0;
																											mso-line-height-rule: exactly;
																										"
																										><span
																											class="t14"
																											style="
																												margin: 0;
																												margin: 0;
																												font-weight: 700;
																												mso-line-height-rule: exactly;
																											"
																											>Kirtan Ruci 2024</span
																										></span
																									>! We're excited to remind you that the much-anticipated Kirtan Mela is just around the corner! We can't wait to welcome you for an unforgettable experience filled with a mesmerizing series of Kirtans, sizzling, mouthwatering flavors at our food stall, vibrant and stylish designs at our clothes stall, and beautiful, artistic henna creations!  

																									</p>
																									<p>
																										
																											<span class="t15" style="margin: 0; margin: 0; mso-line-height-rule: exactly;">
																												<span class="t14" style="margin: 0; margin: 0; font-weight: 700; mso-line-height-rule: exactly;">
																													Venue:
																												</span>
																											</span>
																											<a href="https://www.map.google.com" text-decoration: underline;">
																												www.map.google.com
																											</a>
																									</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t20"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t22"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t24"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="520" class="t23">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t23"
																								style="width: 520px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t21"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 400;
																										font-style: normal;
																										font-size: 16px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: center;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 2px;
																									"
																								>
																									Please show this QR code (or
																									the ID below) at the entrance
																									to make your check-in easier
																									on the day of the event.
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t26"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t28"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="200" class="t27">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t27"
																								style="width: 200px"
																							>
																								<!--<![endif]-->
																								<div style="font-size: 0px">
																									<img
																										class="t25"
																										style="
																											display: block;
																											border: 0;
																											height: auto;
																											width: 100%;
																											margin: 0;
																											max-width: 100%;
																										"
																										width="200"
																										height="198.53125"
																										alt=""
																										src="cid:qrImage"
																									/>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t30"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t32"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="520" class="t31">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t31"
																								style="width: 520px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t29"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 800;
																										font-style: normal;
																										font-size: 16px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: center;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 2px;
																									"
																								>
																									ID : ${code}
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t30"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t32"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="520" class="t31">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t31"
																								style="width: 520px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t29"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 400;
																										font-style: normal;
																										font-size: 16px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: center;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 2px;
																									"
																								>
																									Find your details below
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
													${
														slots["1"] && slots["1"].length > 0
															? `<tr>
														<td>
															<div
																class="t95"
																style="
																	mso-line-height-rule: exactly;
																	mso-line-height-alt: 20px;
																	line-height: 20px;
																	font-size: 1px;
																	display: block;
																"
															>
																&nbsp;&nbsp;
															</div>
														</td>
													</tr>
													<tr>
														<td align="center">
															<table
																class="t97"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t96" style="background-color:#FFFFFF;padding:40px 40px 40px 40px;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t96"
																		style="
																			background-color: #ffffff;
																			width: 480px;
																			padding: 40px 40px 40px 40px;
																		"
																	>
																		<!--<![endif]-->
																		<table
																			role="presentation"
																			width="100%"
																			cellpadding="0"
																			cellspacing="0"
																			style="width: 100% !important"
																		>
																			<tr>
																				<td align="center">
																					<table
																						class="t37"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t36">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t36"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t35"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 700;
																										font-style: normal;
																										font-size: 20px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: left;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 1px;
																									"
																								>
																									Friday 27th 12:30 PM
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t92"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t94"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t93">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t93"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<table
																									role="presentation"
																									width="100%"
																									cellpadding="0"
																									cellspacing="0"
																									style="width: 100% !important"
																								>
																									<tr>
																										<td align="center">
																											<table
																												class="t55"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t54" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t54"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t53"
																															style="
																																width: 100%;
																																text-align: right;
																															"
																														>
																															<div
																																class="t52"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t51"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="right"
																																	valign="top"
																																>
																																	<tr
																																		class="t50"
																																	>
																																		<td></td>
																																		<td
																																			class="t43"
																																			width="361.80905"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t42"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t41"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t40"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="337.8090452261306" class="t39">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t39"
																																												style="
																																													width: 337.81px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t38"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Name
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t49"
																																			width="118.19095"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t48"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t47"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t46"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="94.19095477386934" class="t45">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t45"
																																												style="
																																													width: 94.19px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t44"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Top
																																													Up
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>
																									${slots["1"]
																										.map((item: any) => {
																											return `<tr>
																										<td align="center">
																											<table
																												class="t73"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t72" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t72"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t71"
																															style="
																																width: 100%;
																																text-align: left;
																															"
																														>
																															<div
																																class="t70"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t69"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="left"
																																	valign="top"
																																>
																																	<tr
																																		class="t68"
																																	>
																																		<td></td>
																																		<td
																																			class="t61"
																																			width="417.3913"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t60"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t59"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t58"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="393.39130434782606" class="t57">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t57"
																																												style="
																																													width: 393.39px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t56"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.name}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t67"
																																			width="62.6087"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t66"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t65"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t64"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="38.608695652173914" class="t63">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t63"
																																												style="
																																													width: 38.61px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t62"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.topUpCredit}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>`;
																										})
																										.join("")}
																									
																								</table>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>`
															: ""
													}

													${
														slots["2"] && slots["2"].length > 0
															? `<tr>
														<td>
															<div
																class="t95"
																style="
																	mso-line-height-rule: exactly;
																	mso-line-height-alt: 20px;
																	line-height: 20px;
																	font-size: 1px;
																	display: block;
																"
															>
																&nbsp;&nbsp;
															</div>
														</td>
													</tr>
													<tr>
														<td align="center">
															<table
																class="t97"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t96" style="background-color:#FFFFFF;padding:40px 40px 40px 40px;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t96"
																		style="
																			background-color: #ffffff;
																			width: 480px;
																			padding: 40px 40px 40px 40px;
																		"
																	>
																		<!--<![endif]-->
																		<table
																			role="presentation"
																			width="100%"
																			cellpadding="0"
																			cellspacing="0"
																			style="width: 100% !important"
																		>
																			<tr>
																				<td align="center">
																					<table
																						class="t37"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t36">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t36"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t35"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 700;
																										font-style: normal;
																										font-size: 20px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: left;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 1px;
																									"
																								>
																									Friday 27th 5:15 PM
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t92"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t94"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t93">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t93"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<table
																									role="presentation"
																									width="100%"
																									cellpadding="0"
																									cellspacing="0"
																									style="width: 100% !important"
																								>
																									<tr>
																										<td align="center">
																											<table
																												class="t55"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t54" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t54"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t53"
																															style="
																																width: 100%;
																																text-align: right;
																															"
																														>
																															<div
																																class="t52"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t51"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="right"
																																	valign="top"
																																>
																																	<tr
																																		class="t50"
																																	>
																																		<td></td>
																																		<td
																																			class="t43"
																																			width="361.80905"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t42"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t41"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t40"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="337.8090452261306" class="t39">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t39"
																																												style="
																																													width: 337.81px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t38"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Name
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t49"
																																			width="118.19095"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t48"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t47"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t46"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="94.19095477386934" class="t45">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t45"
																																												style="
																																													width: 94.19px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t44"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Top
																																													Up
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>
																									${slots["2"]
																										.map((item: any) => {
																											return `<tr>
																										<td align="center">
																											<table
																												class="t73"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t72" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t72"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t71"
																															style="
																																width: 100%;
																																text-align: left;
																															"
																														>
																															<div
																																class="t70"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t69"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="left"
																																	valign="top"
																																>
																																	<tr
																																		class="t68"
																																	>
																																		<td></td>
																																		<td
																																			class="t61"
																																			width="417.3913"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t60"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t59"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t58"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="393.39130434782606" class="t57">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t57"
																																												style="
																																													width: 393.39px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t56"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.name}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t67"
																																			width="62.6087"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t66"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t65"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t64"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="38.608695652173914" class="t63">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t63"
																																												style="
																																													width: 38.61px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t62"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.topUpCredit}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>`;
																										})
																										.join("")}
																									
																								</table>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>`
															: ""
													}

													${
														slots["3"] && slots["3"].length > 0
															? `<tr>
														<td>
															<div
																class="t95"
																style="
																	mso-line-height-rule: exactly;
																	mso-line-height-alt: 20px;
																	line-height: 20px;
																	font-size: 1px;
																	display: block;
																"
															>
																&nbsp;&nbsp;
															</div>
														</td>
													</tr>
													<tr>
														<td align="center">
															<table
																class="t97"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t96" style="background-color:#FFFFFF;padding:40px 40px 40px 40px;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t96"
																		style="
																			background-color: #ffffff;
																			width: 480px;
																			padding: 40px 40px 40px 40px;
																		"
																	>
																		<!--<![endif]-->
																		<table
																			role="presentation"
																			width="100%"
																			cellpadding="0"
																			cellspacing="0"
																			style="width: 100% !important"
																		>
																			<tr>
																				<td align="center">
																					<table
																						class="t37"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t36">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t36"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<p
																									class="t35"
																									style="
																										margin: 0;
																										margin: 0;
																										font-family: Lato,
																											BlinkMacSystemFont,
																											Segoe UI, Helvetica Neue,
																											Arial, sans-serif;
																										line-height: 22px;
																										font-weight: 700;
																										font-style: normal;
																										font-size: 20px;
																										text-decoration: none;
																										text-transform: none;
																										direction: ltr;
																										color: #333333;
																										text-align: left;
																										mso-line-height-rule: exactly;
																										mso-text-raise: 1px;
																									"
																								>
																									Saturday 28th 11:00 AM
																								</p>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td>
																					<div
																						class="t92"
																						style="
																							mso-line-height-rule: exactly;
																							mso-line-height-alt: 10px;
																							line-height: 10px;
																							font-size: 1px;
																							display: block;
																						"
																					>
																						&nbsp;&nbsp;
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table
																						class="t94"
																						role="presentation"
																						cellpadding="0"
																						cellspacing="0"
																						style="
																							margin-left: auto;
																							margin-right: auto;
																						"
																					>
																						<tr>
																							<!--[if mso]>
<td width="480" class="t93">
<![endif]-->
																							<!--[if !mso]>-->
																							<td
																								class="t93"
																								style="width: 480px"
																							>
																								<!--<![endif]-->
																								<table
																									role="presentation"
																									width="100%"
																									cellpadding="0"
																									cellspacing="0"
																									style="width: 100% !important"
																								>
																									<tr>
																										<td align="center">
																											<table
																												class="t55"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t54" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t54"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t53"
																															style="
																																width: 100%;
																																text-align: right;
																															"
																														>
																															<div
																																class="t52"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t51"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="right"
																																	valign="top"
																																>
																																	<tr
																																		class="t50"
																																	>
																																		<td></td>
																																		<td
																																			class="t43"
																																			width="361.80905"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t42"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t41"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t40"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="337.8090452261306" class="t39">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t39"
																																												style="
																																													width: 337.81px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t38"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Name
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t49"
																																			width="118.19095"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t48"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t47"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t46"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="94.19095477386934" class="t45">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t45"
																																												style="
																																													width: 94.19px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t44"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 700;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													Top
																																													Up
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>
																									${slots["3"]
																										.map((item: any) => {
																											return `<tr>
																										<td align="center">
																											<table
																												class="t73"
																												role="presentation"
																												cellpadding="0"
																												cellspacing="0"
																												style="
																													margin-left: auto;
																													margin-right: auto;
																												"
																											>
																												<tr>
																													<!--[if mso]>
<td width="480" class="t72" style="border-bottom:1px solid #000;">
<![endif]-->
																													<!--[if !mso]>-->
																													<td
																														class="t72"
																														style="
																															border-bottom: 1px
																																solid #000;
																															width: 480px;
																														"
																													>
																														<!--<![endif]-->
																														<div
																															class="t71"
																															style="
																																width: 100%;
																																text-align: left;
																															"
																														>
																															<div
																																class="t70"
																																style="
																																	display: inline-block;
																																"
																															>
																																<table
																																	class="t69"
																																	role="presentation"
																																	cellpadding="0"
																																	cellspacing="0"
																																	align="left"
																																	valign="top"
																																>
																																	<tr
																																		class="t68"
																																	>
																																		<td></td>
																																		<td
																																			class="t61"
																																			width="417.3913"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t60"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t59"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t58"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="393.39130434782606" class="t57">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t57"
																																												style="
																																													width: 393.39px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t56"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: left;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.name}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td
																																			class="t67"
																																			width="62.6087"
																																			valign="top"
																																		>
																																			<table
																																				role="presentation"
																																				width="100%"
																																				cellpadding="0"
																																				cellspacing="0"
																																				class="t66"
																																				style="
																																					width: 100%;
																																				"
																																			>
																																				<tr>
																																					<td
																																						class="t65"
																																						style="
																																							padding: 8px
																																								12px
																																								8px
																																								12px;
																																						"
																																					>
																																						<table
																																							role="presentation"
																																							width="100%"
																																							cellpadding="0"
																																							cellspacing="0"
																																							style="
																																								width: 100% !important;
																																							"
																																						>
																																							<tr>
																																								<td
																																									align="center"
																																								>
																																									<table
																																										class="t64"
																																										role="presentation"
																																										cellpadding="0"
																																										cellspacing="0"
																																										style="
																																											margin-left: auto;
																																											margin-right: auto;
																																										"
																																									>
																																										<tr>
																																											<!--[if mso]>
<td width="38.608695652173914" class="t63">
<![endif]-->
																																											<!--[if !mso]>-->
																																											<td
																																												class="t63"
																																												style="
																																													width: 38.61px;
																																												"
																																											>
																																												<!--<![endif]-->
																																												<p
																																													class="t62"
																																													style="
																																														margin: 0;
																																														margin: 0;
																																														font-family: Inter
																																																Tight,
																																															BlinkMacSystemFont,
																																															Segoe
																																																UI,
																																															Helvetica
																																																Neue,
																																															Arial,
																																															sans-serif;
																																														line-height: 22px;
																																														font-weight: 400;
																																														font-style: normal;
																																														font-size: 16px;
																																														text-decoration: none;
																																														text-transform: none;
																																														direction: ltr;
																																														color: #333333;
																																														text-align: right;
																																														mso-line-height-rule: exactly;
																																														mso-text-raise: 2px;
																																													"
																																												>
																																													${item.topUpCredit}
																																												</p>
																																											</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																		<td></td>
																																	</tr>
																																</table>
																															</div>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>`;
																										})
																										.join("")}
																									
																								</table>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>`
															: ""
													}
													
													<tr>
														<td align="center">
															<table
																class="t101"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t100" style="padding:20px 0 20px 0;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t100"
																		style="width: 560px; padding: 20px 0 20px 0"
																	>
																		<!--<![endif]-->
																		<p
																			class="t99"
																			style="
																				margin: 0;
																				margin: 0;
																				font-family: Lato, BlinkMacSystemFont,
																					Segoe UI, Helvetica Neue, Arial,
																					sans-serif;
																				line-height: 22px;
																				font-weight: 400;
																				font-style: normal;
																				font-size: 16px;
																				text-decoration: none;
																				text-transform: none;
																				direction: ltr;
																				color: #333333;
																				text-align: center;
																				mso-line-height-rule: exactly;
																				mso-text-raise: 2px;
																			"
																		>
																			For further inquiries, please feel free to
																			reach out to us at
																			<span
																				class="t98"
																				style="
																					margin: 0;
																					margin: 0;
																					font-weight: 700;
																					font-style: normal;
																					text-decoration: none;
																					direction: ltr;
																					color: #0000ff;
																					mso-line-height-rule: exactly;
																				"
																				>info@kirtanruci.com</span
																			>
																		</p>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
													<tr>
														<td align="center">
															<table
																class="t104"
																role="presentation"
																cellpadding="0"
																cellspacing="0"
																style="margin-left: auto; margin-right: auto"
															>
																<tr>
																	<!--[if mso]>
<td width="560" class="t103" style="overflow:hidden;border-radius:14px 14px 0 0;">
<![endif]-->
																	<!--[if !mso]>-->
																	<td
																		class="t103"
																		style="
																			overflow: hidden;
																			width: 560px;
																			border-radius: 14px 14px 0 0;
																		"
																	>
																		<!--<![endif]-->
																		<div style="font-size: 0px">
																			<img
																				class="t102"
																				style="
																					display: block;
																					border: 0;
																					height: auto;
																					width: 100%;
																					margin: 0;
																					max-width: 100%;
																				"
																				width="560"
																				height="133.453125"
																				alt=""
																				src="cid:3"
																			/>
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
		<div
			class="gmail-mobile-forced-width"
			style="white-space: nowrap; font: 15px courier; line-height: 0"
		>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		</div>
	</body>
</html>
`;
}
