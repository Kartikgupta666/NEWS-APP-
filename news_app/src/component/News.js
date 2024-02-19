import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "The Trial Over Bitcoin’s True Creator Is in Session",
            "description": "A UK High Court will settle a long-running debate over whether Craig Wright really is Satoshi Nakamoto, inventor of Bitcoin. Monday’s opening arguments laid the groundwork for both sides.",
            "url": "https://www.wired.com/story/craig-wright-bitcoin-satoshi-nakamoto-trial/",
            "urlToImage": "https://media.wired.com/photos/65bd7e2524c06ba3ede91a33/191:100/w_1280,c_limit/Craig-Wright-Trial-Day-1-Business-Yellow-1494808061.jpg",
            "publishedAt": "2024-02-05T21:07:04Z",
            "content": "For eight years, Craig Wright has claimed to be the elusive Bitcoin creator Satoshi Nakamoto. On Monday, in the swelling heat of a UK courtroom, a trial began that will finally settle the question.\r\n… [+3163 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Artem Golub and Thomas Germain",
            "title": "Why Bitcoin Won’t Reach $1,000,000",
            "description": "Coindesk’s Andy Baehr says Bitcoin is just a normal, bread and butter investment now.",
            "url": "https://gizmodo.com/why-bitcoin-won-t-reach-1-000-000-1851252185",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d27f57afb7ac3501d4d69ce6afff190b.jpg",
            "publishedAt": "2024-02-13T18:15:00Z",
            "content": "Coindesks Andy Baehr says Bitcoin is just a normal, bread and butter investment now."
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "A SIM-swapping attack was behind the SEC’s fake Bitcoin post",
            "description": "The Securities and Exchange Commission says a SIM swapping attack was responsible for its account breach on X earlier this month.",
            "url": "https://www.theverge.com/2024/1/22/24047379/sec-fake-bitcoin-post-x-sim-swapping",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/-q2P7D7-hJSIGn1oJJqaQJm1AhE=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23318430/akrales_220309_4977_0038.jpg",
            "publishedAt": "2024-01-22T23:19:12Z",
            "content": "A SIM-swapping attack was behind the SECs fake Bitcoin post\r\nA SIM-swapping attack was behind the SECs fake Bitcoin post\r\n / The SEC says a bad actor gained control of the phone number associated wit… [+1611 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Maxwell Zeff",
            "title": "Bitcoin Wears a Patagonia Vest Now, but Is It Still Crypto?",
            "description": "Cryptocurrency cleaned up its act this week as spot Bitcoin ETFs made their Wall Street debut in January. The digital tokens are looking almost unrecognizable from what the industry represented just a few years ago, leading to the question, is Bitcoin still c…",
            "url": "https://gizmodo.com/bitcoin-wears-patagonia-vest-now-is-it-still-crypto-1851216868",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5cf152d4aa3e03d74ce08b74ea03e1a3.png",
            "publishedAt": "2024-02-02T13:00:00Z",
            "content": "Cryptocurrency cleaned up its act this week as spot Bitcoin ETFs made their Wall Street debut in January. The digital tokens are looking almost unrecognizable from what the industry represented just … [+2710 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Justine Calma",
            "title": "Crypto mines will have to start reporting their energy use in the US",
            "description": "The US Energy Information Administration says it will start a survey of crypto mines’ electricity consumption following concerns about Bitcoin’s energy hunger and greenhouse gas emissions.",
            "url": "https://www.theverge.com/2024/1/31/24057176/crypto-bitcoin-mining-survey-us-energy-information-administration",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/-W7lVDL2lRP_1kdCg8KuwSPKXLk=/0x0:7360x4912/1200x628/filters:focal(3680x2456:3681x2457)/cdn.vox-cdn.com/uploads/chorus_asset/file/25259226/1235927106.jpg",
            "publishedAt": "2024-01-31T19:30:56Z",
            "content": "Crypto mines will have to start reporting their energy use in the US\r\nCrypto mines will have to start reporting their energy use in the US\r\n / A survey of crypto mines electricity consumption in the … [+2701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "German Police Secure $2 Billion In Bitcoin From Pirate Site Operators",
            "description": "An anonymous reader quotes a report from TorrentFreak: With help from the FBI, German police managed to secure nearly 50,000 bitcoin (USD $2 billion) from the operators of the defunct movie streaming portal, Movie2k. [...] Movie2K was another pirate site that…",
            "url": "https://yro.slashdot.org/story/24/01/30/2318257/german-police-secure-2-billion-in-bitcoin-from-pirate-site-operators",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-01-31T00:10:00Z",
            "content": "With help from the FBI, German police managed to secure nearly 50,000 bitcoin (USD $2 billion) from the operators of the defunct movie streaming portal, Movie2k. [...] Movie2K was another pirate site… [+1548 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lina Batarags",
            "title": "Jack Dorsey showed up to the Super Bowl rocking a 'Satoshi' t-shirt",
            "description": "Dorsey — who cofounded and was formerly the CEO of Twitter, now known as X — was photographed at the Super Bowl sitting with Beyonce and Jay-Z.",
            "url": "https://www.businessinsider.com/jack-dorsey-satoshi-tshirt-nirvana-super-bowl-bitcoin-jayz-2024-2",
            "urlToImage": "https://i.insider.com/65c9a3ad610ab33aa5deea9c?width=1200&format=jpeg",
            "publishedAt": "2024-02-12T06:10:54Z",
            "content": "Jack Dorsey, center, wrote a \"Satoshi\" t-shirt to the Super Bowl.Carmen Mandato / Staff / Getty Images\r\n<ul><li>Jack Dorsey was at the Super Bowl.</li><li>He wore a t-shirt that says \"Satoshi,\" embla… [+2446 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "asoni@insider.com (Aruni Soni)",
            "title": "Crypto miners used the same amount of electricity as all of Australia last year",
            "description": "In the US alone, crypto mining uses 0.6% to 2.3% of the country's electricity demand — as much as entire states like Utah or West Virginia.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-crypto-mining-electricity-energy-us-government-cryptocurrency-australia-eia-2024-2",
            "urlToImage": "https://i.insider.com/65c125247a3d27148877c187?width=1200&format=jpeg",
            "publishedAt": "2024-02-05T19:45:52Z",
            "content": "In 2023, crypto miners around the world used as much electricity as the entirety of Australia. \r\nThat's according to a new report from the Energy Information Administration. In an analysis posted las… [+1923 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Over 2 Percent of the US's Electricity Generation Now Goes To Bitcoin",
            "description": "\"In the last few years, the U.S. has seen a boom in cryptocurrency mining,\" writes Ars Technica. But they add that the U.S. government \"is now trying to track exactly what that means for the consumption of electricity. Specifically, a crucial branch of the U.…",
            "url": "https://hardware.slashdot.org/story/24/02/03/0428251/over-2-percent-of-the-uss-electricity-generation-now-goes-to-bitcoin",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-02-03T18:34:00Z",
            "content": "\"In the last few years, the U.S. has seen a boom in cryptocurrency mining,\" writes Ars Technica. But they add that the U.S. government \"is now trying to track exactly what that means for the consumpt… [+2040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Companies Once Focused On Mining Cryptocurrency Pivot To Generative AI",
            "description": "\"Companies that once serviced the boom in cryptocurrency mining are pivoting to take advantage of the latest data gold rush,\" reports the Guardian.\n\nCanadian company Hive Blockchain changed its name in July to Hive Digital Technologies and announced it was pi…",
            "url": "https://news.slashdot.org/story/24/01/27/0724239/companies-once-focused-on-mining-cryptocurrency-pivot-to-generative-ai",
            "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
            "publishedAt": "2024-01-27T17:34:00Z",
            "content": "Canadian company Hive Blockchain changed its name in July to Hive Digital Technologies and announced it was pivoting to AI. \"Hive has been a pioneering force in the cryptocurrency mining sector since… [+2057 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Andrew Couts",
            "title": "How to Not Get Scammed Out of $50,000",
            "description": "Plus: State-backed hackers test out generative AI, the US takes down a major Russian military botnet, and 100 hospitals in Romania go offline amid a major ransomware attack.",
            "url": "https://www.wired.com/story/how-to-not-get-scammed-out-of-50000/",
            "urlToImage": "https://media.wired.com/photos/65cfc0a11dbea08b10a4278c/191:100/w_1280,c_limit/How-To-Not-Get-Scammed-For-50k-Security-200392681-001.jpg",
            "publishedAt": "2024-02-17T14:00:00Z",
            "content": "While the response to Cowles tale has been a mix of praise and mockery, experts in online threats say its foolish to think youre too savvy to never fall for a professional scammer. The reality is, cr… [+3560 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Vuelve la fiebre por el Bitcoin: alcanza su máximo valor en dos años y se acerca al récord histórico",
            "description": "El Bitcoin ha alcanzado esta semana su nivel más alto desde 2021, situándose en los hasta 50.000 dólares de valor después de que en los últimos dos años disminuyera considerablemente ante las preocupaciones sobre este y otros activos relacionados con escándal…",
            "url": "http://hipertextual.com/2024/02/vuelve-la-fiebre-por-el-bitcoin-alcanza-su-maximo-valor-en-dos-anos-y-se-acerca-al-record-historico",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/03/aleksi-rc3a4isc3a4-dcct1cqt8os-unsplash-scaled.jpeg",
            "publishedAt": "2024-02-13T11:29:07Z",
            "content": "El Bitcoin ha alcanzado esta semana su nivel más alto desde 2021, situándose en los hasta 50.000 dólares de valor después de que en los últimos dos años disminuyera considerablemente ante las preocup… [+2296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "¿Por qué Bitcoin ha vuelto a los 50.000 dólares? Te lo explicamos",
            "description": "Bitcoin ha vuelto a ser noticia tras cotizar por encima de 50.000 dólares. La criptomoneda alcanzó su precio más alto en dos años y el mercado ya se ilusiona con que la tendencia alcista se mantenga, incluso con el punto de mira puesto en que el activo rompa …",
            "url": "http://hipertextual.com/2024/02/por-que-bitcoin-ha-vuelto-50000-dolares",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/michael-fortsch-4GD_5kMZmY8-unsplash-scaled.jpg",
            "publishedAt": "2024-02-13T18:48:24Z",
            "content": "Bitcoin ha vuelto a ser noticia tras cotizar por encima de 50.000 dólares. La criptomoneda alcanzó su precio más alto en dos años y el mercado ya se ilusiona con que la tendencia alcista se mantenga,… [+6853 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Deanna Ritchie",
            "title": "Everyone wants to buy and sell bitcoin after the SEC made it easier",
            "description": "Over the last two weeks, Bitcoin’s value has dropped by 15% as some investors have taken advantage of the much-heralded […]\nThe post Everyone wants to buy and sell bitcoin after the SEC made it easier appeared first on ReadWrite.",
            "url": "https://readwrite.com/everyone-wants-to-buy-and-sell-bitcoin-after-the-sec-made-it-easier/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/buy-and-sell-bitcoin.jpg",
            "publishedAt": "2024-01-25T01:48:20Z",
            "content": "Over the last two weeks, Bitcoin’s value has dropped by 15% as some investors have taken advantage of the much-heralded introduction of bitcoin exchange-traded funds earlier this month to sell their … [+2411 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcointalk.org"
            },
            "author": null,
            "title": "The Bitcoin Social Network",
            "description": "The Bitcoin Social Network",
            "url": "https://bitcointalk.org/index.php?topic=5482476.0",
            "urlToImage": null,
            "publishedAt": "2024-01-21T22:57:40Z",
            "content": "The Bitcoin Social NetworkA decentralized system is proposed to resolve the escalating transaction costs for Bitcoin transactions, from increasing demand in extra information being saved on the Bitco… [+1224 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "'Stablecoins' Enabled $40 Billion In Crypto Crime Since 2022",
            "description": "An anonymous reader quotes a report from Wired: Stablecoins, cryptocurrencies pegged to a stable value like the US dollar, were created with the promise of bringing the frictionless, border-crossing fluidity of Bitcoin to a form of digital money with far less…",
            "url": "https://yro.slashdot.org/story/24/01/18/2112213/stablecoins-enabled-40-billion-in-crypto-crime-since-2022",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-01-18T22:00:00Z",
            "content": "An anonymous reader quotes a report from Wired: Stablecoins, cryptocurrencies pegged to a stable value like the US dollar, were created with the promise of bringing the frictionless, border-crossing … [+3000 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Gary Shilling says the S&P 500 may crash 30%, a recession will hit — and bitcoin and AI are both overhyped",
            "description": "Stocks are poised to disappoint, recession alarms are flashing, and speculation is rife in tech and crypto, says market prophet Gary Shilling.",
            "url": "https://markets.businessinsider.com/news/stocks/gary-shilling-stock-market-outlook-crash-spx-recession-bitcoin-ai-2024-2",
            "urlToImage": "https://i.insider.com/65c49f4943bb77284ba4d201?width=1200&format=jpeg",
            "publishedAt": "2024-02-08T09:36:13Z",
            "content": "Gary Shilling.A. Gary Shilling & Co.\r\n<ul>\n<li>The S&P 500 may be headed for a 30% crash, a legendary market forecaster has warned.</li>\n<li>Gary Shilling said stocks are \"very expensive and very dis… [+3820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Brad Anderson",
            "title": "How Can Your Startup Support Cryptocurrency?",
            "description": "Cryptocurrency will become more popular and more accepted as more mainstream businesses support it. Without that ongoing recognition and perceived […]\nThe post How Can Your Startup Support Cryptocurrency? appeared first on ReadWrite.",
            "url": "https://readwrite.com/how-can-your-startup-support-cryptocurrency/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/examples-of-cryptocurrency-scaled.jpg",
            "publishedAt": "2024-01-26T19:45:43Z",
            "content": "Cryptocurrency will become more popular and more accepted as more mainstream businesses support it. Without that ongoing recognition and perceived legitimacy, cryptocurrencies may continue to exist i… [+7636 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Bitcoin supera la barrera de los 50.000 dólares. No lo lograba desde hace más de dos años",
            "description": "Las criptodivisas vuelven a animarse. Tras los récords de 2021, tuvieron su particular annus horribilis en 2022, pero el sector se está recuperando en los últimos meses. La mejor prueba es la que nos da bitcoin, que ayer volvió a superar los 50.000 dólares de…",
            "url": "https://www.xataka.com/criptomonedas/bitcoin-supera-barrera-50-000-dolares-no-lograba-hace-dos-anos",
            "urlToImage": "https://i.blogs.es/613ee4/btc1/840_560.jpeg",
            "publishedAt": "2024-02-13T08:14:15Z",
            "content": "Las criptodivisas vuelven a animarse. Tras los récords de 2021, tuvieron su particular annus horribilis en 2022, pero el sector se está recuperando en los últimos meses. La mejor prueba es la que nos… [+2602 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Martin Holland",
            "title": "Erster Bitcoin-Fonds in den USA sammelt über eine Milliarde US-Dollar ein",
            "description": "Das Interesse an den Bitcoin-ETFs in den USA ist vorhanden, aber geringer als in den optimistischsten Prognosen. Der Bitcoin-Preis hat bislang nicht profitiert.",
            "url": "https://www.heise.de/news/Erster-Bitcoin-Fonds-in-den-USA-sammelt-ueber-eine-Milliarde-US-Dollar-ein-9602117.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/2/8/4/7/9/shutterstock_1916262404-b7c59be85e1ebe55.jpg",
            "publishedAt": "2024-01-19T07:04:00Z",
            "content": "Wenige Tage nachdem die US-Börsenaufsicht SEC den Handel mit Bitcoin-Fonds erlaubt hat, hat der erste nun die Marke von einer Milliarde US-Dollar an Einzahlungen überschritten. Das berichtet das US-F… [+2113 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "El Salvador's president eyes re-election on back of gang crackdown",
            "description": "President Nayib Bukele is far ahead of rivals in polls - but not all voters are convinced.",
            "url": "https://www.bbc.co.uk/news/world-latin-america-68195441",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9CD0/production/_132544104_screenshot2024-02-03202206.jpg",
            "publishedAt": "2024-02-04T00:50:33Z",
            "content": "There was no doubting Francisco Villegas' political colours as he stepped off his flight into El Salvador. \r\nDraped in a flag bearing President Nayib Bukele's face, he was dressed in light blue - the… [+6173 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks eye fresh record highs as earnings season heats up",
            "description": "With 10% of the S&P 500 having reported earnings so far, 65% are beating profit estimates with a median gain of 6%, according to Fundstrat.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-record-highs-q4-earnings-season-economy-2024-1",
            "urlToImage": "https://i.insider.com/62029ae9bd50410019192ee1?width=1200&format=jpeg",
            "publishedAt": "2024-01-22T14:37:51Z",
            "content": "US stocks jumped on Monday to new record highs, extending their gain from last week as the fourth-quarter earnings season gets underway. \r\nThere are 75 S&amp;P 500 companies scheduled to report fourt… [+996 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Jeff John Roberts",
            "title": "Craig Wright offers settlement to Bitcoin developers",
            "description": "Craig Wright has terrorized the crypto world for nearly a decade with bogus lawsuits, but the tables may have turned.",
            "url": "https://fortune.com/crypto/2024/01/25/craig-wright-bitcoin-satoshi-claim-legal-battle/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2024/01/GettyImages-1495410657-e1706209300174.jpg?resize=1200,600",
            "publishedAt": "2024-01-26T02:33:52Z",
            "content": "The crypto world is rife with scammers, including the Colorado pastor I wrote about on Monday who spent the proceeds from a token hustle on home renovations because the Lord told us to. But one of th… [+3635 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": null,
            "title": "Hal Finney was the designer of Bitcoin",
            "description": "It has been an open secret in the cryptography community that Hal Finney was the designer of BitCoin from the very start. Hal died in 2014. Or at least he was frozen in liquid nitrogen so not talking either way.Besides being the first person to be involved in…",
            "url": "https://yro.slashdot.org/comments.pl?sid=23217056&cid=64218342",
            "urlToImage": null,
            "publishedAt": "2024-02-06T14:53:30Z",
            "content": "It has been an open secret in the cryptography community that Hal Finney was the designer of BitCoin from the very start. Hal died in 2014. Or at least he was frozen in liquid nitrogen so not talking… [+1180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ssrn.com"
            },
            "author": null,
            "title": "Breaking BFT: Quantifying the Cost to Attack Bitcoin and Ethereum",
            "description": "Much has been hypothesized and feared about 51% attacks on Bitcoin and 34% attacks on Ethereum. However, the costs and benefits associated with perpetrating the",
            "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4727999",
            "urlToImage": "https://cdn.ssrn.com/ssrn-global-header/11589acb53bc518aa22929bf19add113.svg",
            "publishedAt": "2024-02-15T21:41:37Z",
            "content": "41 PagesPosted: \r\nDate Written: February 15, 2024\r\nAbstract\r\nMuch has been hypothesized and feared about 51% attacks on Bitcoin and 34% attacks on Ethereum. However, the costs and benefits associated… [+1577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Andreas Knobloch",
            "title": "Bitcoin knackt zum ersten Mal seit mehr als zwei Jahren die 50.000-Dollar-Marke",
            "description": "Die Zulassung von Bitcoin-ETFs verschafft der Kryptowährung Rückenwind. Wie nachhaltig der ist, darüber gibt es verschiedene Ansichten.",
            "url": "https://www.heise.de/news/Bitcoin-knackt-zum-ersten-Mal-seit-mehr-als-zwei-Jahren-die-50-000-Dollar-Marke-9626246.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/1/2/0/1/shutterstock_1888907947-54ebd2bafa9434e9.jpg",
            "publishedAt": "2024-02-12T22:57:00Z",
            "content": "Bitcoin hat zum ersten Mal seit mehr als zwei Jahren die Marke von 50.000 US-Dollar erreicht. Der weltgrößten Kryptowährung verleiht die Erwartung von Zinssenkungen im Laufe dieses Jahres und die Zul… [+2821 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Lacort",
            "title": "Bitcoin supera el billón de dólares de capitalización bursátil. Ya es el décimo activo más valioso del mundo",
            "description": "Tras un 2023 turbulento en el que se alejó de sus últimos máximos históricos, cuando en noviembre de 2021 rozó los 70.000 dólares, Bitcoin ha arrancado 2024 con fuerza y los más de 51.000 dólares que marca su valor actual le permiten superar nuevamente el bil…",
            "url": "https://www.xataka.com/criptomonedas/bitcoin-supera-billon-dolares-capitalizacion-bursatil-decimo-activo-valioso-mundo",
            "urlToImage": "https://i.blogs.es/3dc3c8/btc-xataka/840_560.jpeg",
            "publishedAt": "2024-02-16T10:00:17Z",
            "content": "Tras un 2023 turbulento en el que se alejó de sus últimos máximos históricos, cuando en noviembre de 2021 rozó los 70.000 dólares, Bitcoin ha arrancado 2024 con fuerza y los más de 51.000 dólares que… [+2687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Martin Holland",
            "title": "Gefälschter Tweet zur Freigabe von Bitcoin-ETFs: SEC Opfer von SIM-Swapping",
            "description": "Mit einem falschen Tweet hat die SEC vor wenigen Tagen für heftige Preisschwankungen beim Bitcoin gesorgt. Nun wird deutlicher, wie der eingeschmuggelt wurde.",
            "url": "https://www.heise.de/news/Gefaelschter-Tweet-zur-Freigabe-von-Bitcoin-ETFs-SEC-Opfer-von-SIM-Swapping-9605332.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/0/1/5/3/shutterstock_2035449551-9dfaf44f1ec57ada.jpg",
            "publishedAt": "2024-01-23T07:10:00Z",
            "content": "Der gefälschte Tweet vom Account der US-Börsenaufsicht, der vor zwei Wochen für einen Kurssprung des Bitcoin gesorgt hat, konnte aufgrund von SIM-Swapping eingeschmuggelt werden. Das teilte die SEC m… [+2857 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Andreas Knobloch",
            "title": "Dienstag: Bitcoin knackt 50.000-Dollar-Marke, BSI rät zu verschiedenen Wallets",
            "description": "Bitcoin im Aufwind + Hinweise zum sicheren Bezahlen mit digitalem Euro + HP senkt Forderung + Google fördert KI-Kompetenzen + Menschenmenge zerstört Robotaxi",
            "url": "https://www.heise.de/news/Dienstag-Bitcoin-knackt-50-000-Dollar-Marke-BSI-raet-zu-verschiedenen-Wallets-9626262.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/1/2/0/9/Wochentage-source-sans-7814e5ddc18c7381.png",
            "publishedAt": "2024-02-13T05:30:00Z",
            "content": "Die Zulassung von Bitcoin-ETFs in den USA zu Jahrensbeginn verschafft der weltgrößten Kryptowährung Rückenwind. Der Bitcoin-Kurs knackt zum ersten Mal seit zwei Jahren die Marke von 50.000 US-Dollar.… [+4327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Stefan Krempl",
            "title": "EU-Gremien einig: Anonyme Barzahlungen nur noch bis 2999 Euro",
            "description": "Die neuen EU-Geldwäscheregeln stehen. Sie bringen eine Bargeldobergrenze und machen Bitcoin & Co. nachverfolgbar. Finanztransaktionen werden schärfer überwacht.",
            "url": "https://www.heise.de/news/EU-Gremien-einig-Anonyme-Barzahlungen-nur-noch-bis-2999-Euro-9601949.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/2/8/3/9/0/shutterstock_1840858240-a44aee88534cfc6b.jpg",
            "publishedAt": "2024-01-18T19:20:00Z",
            "content": "Unterhändler des EU-Parlaments, des Ministerrats und der Kommission haben sich in der Nacht zum Donnerstag auf ein weiteres Gesetzespaket im Kampf gegen Geldwäsche und Terrorismusfinanzierung verstän… [+3634 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Steve Goldstein",
            "title": "Good news for Coinbase? Bitcoin ETF activity has been ‘additive’ to crypto demand, says Robinhood CFO",
            "description": "Robinhood’s CFO says the launch of spot bitcoin ETFs has helped its business.",
            "url": "https://www.marketwatch.com/story/good-news-for-coinbase-bitcoin-etf-activity-has-been-additive-to-crypto-demand-says-robinhood-cfo-9f2b7f59",
            "urlToImage": "https://images.mktw.net/im-325076/social",
            "publishedAt": "2024-02-14T09:29:00Z",
            "content": "One of the big concerns for investors in Coinbase Global is that, despite the company having a role in many of the spot bitcoin exchange-traded funds that were launched, the new way of acquiring cryp… [+195 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Christine Idzelis, Frances Yue",
            "title": "Bitcoin ETFs just had their first week of trading. Here’s who’s winning and losing.",
            "description": "Grayscale’s newly converted spot bitcoin ETF sees outflows, while other large firms are attracting assets to recently launched funds",
            "url": "https://www.marketwatch.com/story/bitcoin-etfs-just-had-their-first-week-of-trading-heres-whos-winning-and-losing-0272abce",
            "urlToImage": "https://images.mktw.net/im-10357439/social",
            "publishedAt": "2024-01-20T12:00:00Z",
            "content": "BlackRock is leading inflows into spot bitcoin exchange-traded funds after about a week of trading, as investors weigh a group of similar ETFs that all launched on the same day.Its pretty clear that … [+6270 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Bitcoin regains $1 trillion market cap after a tumultuous two years for crypto",
            "description": "Bitcoin is benefitting from regulatory approval of new exchange-traded funds and the coming ‘halving’ event.",
            "url": "https://www.marketwatch.com/story/bitcoin-regains-1-trillion-market-cap-after-a-tumultuous-two-years-for-crypto-b62be7e4",
            "urlToImage": "https://images.mktw.net/im-23083165/social",
            "publishedAt": "2024-02-14T17:08:00Z",
            "content": "Bitcoin has regained its $1 trillion market capitalization on Wednesday, as the crypto industry works to recover from a tumultuous two years. Interest in bitcoin has grown since a new flock of exchan… [+2175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "When is bitcoin halving? Here’s what history says about how it may impact the cryptocurrency’s price.",
            "description": "Investors are closely watching bitcoin’s upcoming halving, which is expected to happen in April, as history has shown the cryptocurrency usually sees significant price appreciation in the wake of halvings.",
            "url": "https://www.marketwatch.com/story/when-is-bitcoin-halving-heres-what-history-saysabout-how-it-may-impact-the-cryptocurrencys-price-7e7c4ca5",
            "urlToImage": "https://images.mktw.net/im-96310580/social",
            "publishedAt": "2024-02-16T19:02:00Z",
            "content": "Investors are closely watching bitcoins upcoming halving, which is expected to happen in April, as history has shown the cryptocurrency usually sees significant price appreciation in the wake of halv… [+1813 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Karissa Bell",
            "title": "The SEC says its X account was taken over with a SIM swap attack",
            "description": "The Securities and Exchange Commission has provided more details about how its official X account was compromised earlier this month. In a statement\r\n, the regulator confirmed that it had been the victim of a SIM swapping attack and that its X account was not…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d01a17c5-2d90-4412-9e09-e2e158f9b557",
            "urlToImage": null,
            "publishedAt": "2024-01-23T00:45:42Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "JC Torres",
            "title": "Smart piggy bank concept brings the Bitcoin feeling to physical coins",
            "description": "Smart piggy bank concept brings the Bitcoin feeling to physical coinsCryptocurrencies like Bitcoin and its cousins were supposed to revolutionize the way the world sees and uses money, but it will take more than just...",
            "url": "https://www.yankodesign.com/2024/02/08/smart-piggy-bank-concept-brings-the-bitcoin-feeling-to-physical-coins/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2024/02/smart-piggy-bank-concept-brings-the-bitcoin-feeling-to-physical-coins/smart-piggy-bank-concept-3.jpg",
            "publishedAt": "2024-02-08T12:40:51Z",
            "content": "Cryptocurrencies like Bitcoin and its cousins were supposed to revolutionize the way the world sees and uses money, but it will take more than just a few revolutionary ideas to change a system that h… [+2443 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Emily Bary",
            "title": "Coinbase’s stock gains as JPMorgan abandons bearish call less than a month in",
            "description": "The analyst says he “previously underestimated the strength” of spot bitcoin ETFs.",
            "url": "https://www.marketwatch.com/story/coinbases-stock-gains-as-jpmorgan-abandons-bearish-call-less-than-a-month-in-d30be553",
            "urlToImage": "https://images.mktw.net/im-47511340/social",
            "publishedAt": "2024-02-15T13:56:00Z",
            "content": "That was fast.\r\nLess than a month after downgrading Coinbase Global Inc. shares COIN to underweight, JPMorgan analyst Kenneth Worthington is moving back to a neutral stance. \r\nWhile he previously exp… [+150 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "A small bitcoin addition could double a traditional portfolio’s return, this asset manager says.",
            "description": "A weekly look at the most important news and moves in crypto, and what’s on the horizon in digital assets.",
            "url": "https://www.marketwatch.com/story/a-small-bitcoin-addition-could-double-a-traditional-portfolios-return-this-asset-manager-says-7a8a2853",
            "urlToImage": "https://images.mktw.net/im-783732/social",
            "publishedAt": "2024-01-31T19:00:00Z",
            "content": "Welcome back to Distributed Ledger. This is Frances Yue, crypto and markets reporter at MarketWatch.Bitcoin \r\n BTCUSD,\r\n -0.06%\r\nETFs have been trading for a few weeks and some investors have been wo… [+3436 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Jonathan Bennett",
            "title": "FLOSS Weekly Episode 769: OpenCost — We Spent How Much?",
            "description": "This week Jonathan Bennett and Katherine Druckman talk with Matt Ray about OpenCost. What exactly is Cloud Native? Why do we need a project just for tracking expenses? Doesn’t the cloud make …",
            "url": "https://hackaday.com/2024/02/07/floss-weekly-episode-769-opencost-we-spent-how-much/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2024/02/FLOSS-769.png",
            "publishedAt": "2024-02-08T00:00:22Z",
            "content": "This week Jonathan Bennett and Katherine Druckman talk with Matt Ray about OpenCost. What exactly is Cloud Native? Why do we need a project just for tracking expenses? Doesn’t the cloud make everythi… [+1112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Rachael Davis",
            "title": "Cyber security agency warns this WordPress widget might leak data",
            "description": "A WordPress crypto widget used by thousands could contain a security vulnerability that could leak data to potential attackers. Cyber […]\nThe post Cyber security agency warns this WordPress widget might leak data appeared first on ReadWrite.",
            "url": "https://readwrite.com/security-cyber-agency-warns-this-wordpress-widget-might-leak-data/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/02/pexels-sora-shimazaki-5935794-scaled.jpg",
            "publishedAt": "2024-02-08T12:49:33Z",
            "content": "A WordPress crypto widget used by thousands could contain a security vulnerability that could leak data to potential attackers.\r\nCyber Security Agency (CSA) Singapore has released a security bulletin… [+1839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Daniel AJ Sokolov",
            "title": "Anklagen wegen Milliardenbetrug mit Krypto-Pyramide Hyperfund",
            "description": "1,89 Milliarden Dollar haben Opfer in Hyperfund und Hyperverse eingezahlt.​ Die zugeteilten Kryptowährungen sind wertlos.",
            "url": "https://www.heise.de/news/Anklagen-wegen-Milliardenbetrug-mit-Krypto-Pyramide-Hyperfund-9613742.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/4/5/8/5/shutterstock_1924985480-0595137c304ec176.jpg",
            "publishedAt": "2024-01-30T22:20:00Z",
            "content": "Der Hyperfund ist nun in den USA mehrfach gerichtsanhängig. 1,89 Milliarden US-Dollar sollen Anleger in das Schneeballsystem mit Kryptowährung Hyper Units eingezahlt haben. Geschäftsmodell gab es son… [+4198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Michael Linden",
            "title": "Über 52.000 US-Dollar: Bitcoin erreicht neues 26-Monats-Hoch",
            "description": "Der Kurs der Kryptowährung Bitcoin setzt seinen Aufwärtstrend fort und erreichte ein neues 26-Monats-Hoch. (Bitcoin, Börse)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fueber-52-000-us-dollar-bitcoin-erreicht-neues-26-monats-hoch-2402-182249.html&referer=https%3A%2F%2Ft.co%2Fbaffc852a2",
            "urlToImage": null,
            "publishedAt": "2024-02-15T12:45:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Bitcoin is down 20% in wake of a new breed of ETFs. Why prices could still set records this year.",
            "description": "Some analysts still see room for the digital asset to reach an all-time high by the end of this year.",
            "url": "https://www.marketwatch.com/story/bitcoin-is-down-20-in-wake-of-a-new-breed-of-etfs-why-prices-could-still-set-records-this-year-eb89bd9c",
            "urlToImage": "https://images.mktw.net/im-261586/social",
            "publishedAt": "2024-01-24T22:33:00Z",
            "content": "Bitcoin has fallen almost 20% in the past two weeks, when a new breed of U.S. exchange-traded funds debuted that invest in the cryptocurrency. Some analysts still see room for the digital asset to re… [+4330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "New bitcoin ETFs are boosting crypto exchanges. Here’s how.",
            "description": "A weekly look at the most important news and moves in crypto, and what’s on the horizon in digital assets.",
            "url": "https://www.marketwatch.com/story/new-bitcoin-etfs-are-boosting-crypto-exchanges-heres-how-2ed45152",
            "urlToImage": "https://images.mktw.net/im-783732/social",
            "publishedAt": "2024-02-07T21:16:00Z",
            "content": "Welcome back to Distributed Ledger. This is Frances Yue, crypto and markets reporter at MarketWatch.As investor interest in crypto assets increased with the arrival last month of new bitcoin ETFs, th… [+3212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "FTX customers look set to get their money back in full (with asterisk)",
            "description": "In a surprise development, bankruptcy lawyers say that FTX customers – once considered to have lost almost everything – are now expected to get their money back in full from the remains of the cryptocurrency company … \n\n\n\n more…",
            "url": "https://9to5mac.com/2024/02/12/ftx-customers-money/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/FTX-customers.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-02-12T13:07:00Z",
            "content": "In a surprise development, bankruptcy lawyers say that FTX customers once considered to have lost almost everything are now expected to get their money back in full from the remains of the cryptocurr… [+1808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "tristan carballeda",
            "title": "Le Bitcoin atteint de nouveaux sommets, 90% des propriétaires sont déjà gagnants",
            "description": "Le Bitcoin vient de renouer avec les 50 000 dollars, une valeur qu'il n'avait plus atteinte depuis la fin d'année 2021.",
            "url": "https://www.journaldugeek.com/2024/02/13/le-bitcoin-atteint-de-nouveaux-sommets-90-des-proprietaires-sont-deja-gagnants/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/bitcoin-valeur-bourse.jpg",
            "publishedAt": "2024-02-13T14:27:31Z",
            "content": "L’hiver des cryptomonnaies semble terminer. Après un gros creux durant l’année 2022, qui l’a vu tomber à 19 000 dollars, le Bitcoin est aujourd’hui en train de remonter sur la pente ascendante. La cr… [+3255 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "MarketWatch",
            "title": "These mutual fund and ETF investing tips can help you ride the market’s waves",
            "description": "Don’t miss these top mutual fund and ETF investing features: Take that, Wall Street! Pariah Capital wins again — and the picks for 2024 Large-cap ETFs seem...",
            "url": "https://www.marketwatch.com/story/these-mutual-fund-and-etf-investing-tips-can-help-you-ride-the-markets-waves-3ff7d610",
            "urlToImage": "https://images.mktw.net/im-503925/social",
            "publishedAt": "2024-01-20T10:11:00Z",
            "content": "Sign up here to get MarketWatchs best mutual fund and ETF stories emailed to you weekly!The argument for seeing what the top money managers are buying and running in the other direction. Read MoreLar… [+1828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Antoine Gautherie",
            "title": "La police allemande saisit deux milliards d’euros en Bitcoin",
            "description": "Il s'agit de la plus grosse saisie de cryptomonnaies jamais réalisée par les autorités allemande.",
            "url": "https://www.journaldugeek.com/2024/02/02/la-police-allemande-saisit-deux-milliards-deuros-en-bitcoin/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/bitcoin.jpg",
            "publishedAt": "2024-02-02T08:00:26Z",
            "content": "Selon Reuters, un programmeur allemand dont lidentité na pas été dévoilée a récemment fait lobjet dune saisie de cryptomonnaies aux proportions impressionnantes. En réparation dune affaire qui remont… [+3511 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "What the latest inflation data means for interest rates",
            "description": "In today's big story, we're looking at what a hotter-than-expected inflation report means for markets and the economy.",
            "url": "https://www.businessinsider.com/inflation-data-impact-on-fed-interest-rate-cut-2024-2",
            "urlToImage": "https://i.insider.com/65ccd21594aa8ee8e84b2f0a?width=1200&format=jpeg",
            "publishedAt": "2024-02-14T14:47:16Z",
            "content": "Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Happy Valentine's Day! Don't worry … [+6433 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "The state of Wall Street's drug culture",
            "description": "In today's big story, we're looking at whether Wall Street has a drug problem.",
            "url": "https://www.businessinsider.com/news-today-january-19-wall-street-drug-culture-2024-1",
            "urlToImage": "https://i.insider.com/647a453040bf000019fa15d4?width=1200&format=jpeg",
            "publishedAt": "2024-01-19T14:26:03Z",
            "content": "Grant Faint/Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Insider's daily newsletter here.</li></ul>Happy Friday! The internet needs… [+7734 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Inside Tesla's make-or-break earnings report",
            "description": "In today's big story, we're previewing Tesla's make-or-break earnings report.",
            "url": "https://www.businessinsider.com/tesla-earnings-whats-next-preview-elon-musk-2024-1",
            "urlToImage": "https://i.insider.com/65b0f6cd617029e90a5fdc13?width=1200&format=jpeg",
            "publishedAt": "2024-01-24T13:17:24Z",
            "content": "Justin Sullivan/Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Insider's daily newsletter here.</li></ul>Hey there! We seem well on o… [+7278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "たもり",
            "title": "月面着陸を断念した「ペレグリン」、一体なにが積まれていたの？",
            "description": "Image:CarnegieMellonUniversity/Astrobotic社の「ペレグリン」に積載されている学生が製作したロボット、月面ローバー「アイリス」のコンセプト図1月8日に打ち上げられたAstrobotic（アストロボティック）社の月着陸機「ペレグリン」。さまざまなペイロード（積載物）を乗せ、商業宇宙輸送の時代の到来を告げるミッションとなるはずでしたが、打ち上げ直後のトラブルにより",
            "url": "https://www.gizmodo.jp/2024/01/astrobotic-peregrine-moon-payloads-time-capsule-bitcoin.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/01/07/240107Peregrine.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-01-18T14:00:00Z",
            "content": "18Astrobotic\r\n18218418ULA\r\n2\r\nImage: Astrobotic\r\nAstrobotic1283kgSinus Viscositatis\r\nNASA\r\nNASACLPSCLPS2028263,815\r\nAstrobotic2024Intuitive MachinesNASA79501167700113\r\nNASA\r\nCLPSNASA1AstroboticPeregr… [+887 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "FTX devolverá los fondos de todos sus clientes, pero tiene truco",
            "description": "La larga novela por el fraude y la quiebra de FTX parece estar un paso más cerca de su final. En una audiencia judicial que se realizó este miércoles, uno de los abogados a cargo del proceso de bancarrota confirmó que planean devolver todos los fondos pertene…",
            "url": "http://hipertextual.com/2024/01/ftx-promete-devolver-fondos-clientes",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/05/Bankman2-scaled.jpg?fit=2560%2C1600&quality=70&strip=all&ssl=1",
            "publishedAt": "2024-01-31T18:50:00Z",
            "content": "La larga novela por el fraude y la quiebra de FTX parece estar un paso más cerca de su final. En una audiencia judicial que se realizó este miércoles, uno de los abogados a cargo del proceso de banca… [+4422 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Martin Holland",
            "title": "Nordkorea: Womöglich Kryptogeld im Wert von 3 Milliarden US-Dollar erbeutet",
            "description": "Die UN lassen regelmäßig prüfen, wie Nordkorea die Sanktionen umgeht. Dafür werden auch dutzende Cyberangriffe untersucht, bei denen Kryptogeld erbeutet wurde.",
            "url": "https://www.heise.de/news/Nordkorea-Womoeglich-Kryptogeld-im-Wert-von-drei-Milliarden-US-Dollar-erbeutet-9622664.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/9/3/0/0/MDB22941_f476c82b0c-5c0a824d9dff77ea.jpg",
            "publishedAt": "2024-02-08T12:07:00Z",
            "content": "Im Rahmen der Prüfung von UN-Sanktionen gegen Nordkorea werden auch dutzende Cyberangriffe untersucht, mit denen das dortige Regime in den vergangenen Jahren umgerechnet rund 3 Milliarden US-Dollar e… [+2002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Juan Carlos Figueroa",
            "title": "Terroristas, estafadores y pedófilos siguen recaudando miles de millones de dólares al año en criptomonedas",
            "description": "Las criptomonedas son el sostén financiero de organizaciones ilícitas en todo el mundo. Solo el año pasado, se enviaron al menos 24.200 millones de dólares a direcciones de wallets o carteras cripto vinculadas a estas. Son fondos relacionados con estafadores,…",
            "url": "http://hipertextual.com/2024/01/terroristas-pedofilos-estafadores-fortuna-criptomonedas",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/07/surtido-minimalista-bodegones-criptomonedas.jpg",
            "publishedAt": "2024-01-18T19:46:58Z",
            "content": "Las criptomonedas son el sostén financiero de organizaciones ilícitas en todo el mundo. Solo el año pasado, se enviaron al menos 24.200 millones de dólares a direcciones de wallets o carteras cripto … [+5708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Jean-Yves Alric",
            "title": "Bitcoin : un investissement toujours plus risqué ? L’alerte de cette agence américaine",
            "description": "Malgré l’euphorie ambiante, un régulateur américain tient à rappeler les risques.",
            "url": "https://www.presse-citron.net/bitcoin-un-investissement-toujours-plus-risque-lalerte-de-cette-agence-americaine/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/01/bitcoin.jpg",
            "publishedAt": "2024-01-30T10:30:53Z",
            "content": "Sur le papier, tout va pour le mieux pour le Bitcoin et les cryptomonnaies en général. Alors que les premiers ETF indexés sur le Bitcoin ont été validés par lautorité des marchés financiers américain… [+2399 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Market prophet Gary Shilling expects S&P 500 returns to slump — and warns a recession could stretch into 2025",
            "description": "Legendary forecaster Gary Shilling issued a gloomy outlook for the stock market and predicted a looming economic downturn.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-shilling-spx-returns-recession-forecast-us-economy-2024-1",
            "urlToImage": "https://i.insider.com/53b5d8db6bb3f78219061221?width=1200&format=jpeg",
            "publishedAt": "2024-01-31T12:59:06Z",
            "content": "Gary Shilling.Bloomberg TV\r\n<ul>\n<li>Investors should expect lower stock market returns in the future, Gary Shilling says.</li>\n<li>The legendary forecaster cited slower economic growth, steep valuat… [+2840 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Romain Vitt",
            "title": "Crypto : poussé par l’ETF Bitcoin, Coinbase annonce des résultats spectaculaires",
            "description": "Coinbase annonce des résultats inattendus pour son dernier trimestre 2023. Une fin d’année positive grâce, notamment, au succès de l’ETF Bitcoin.",
            "url": "https://www.presse-citron.net/crypto-pousse-par-letf-bitcoin-coinbase-annonce-des-resultats-spectaculaires/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2021/04/Coinbase-cotation-Nasdaq.jpg",
            "publishedAt": "2024-02-16T09:26:19Z",
            "content": "Bien aidée par lenvolée du bitcoin, l’action de Coinbase Global Inc (NASDAQ:COIN) a enregistré une performance spectaculaire ces derniers jours. Jeudi soir, la clôture des échanges daprès-bourse a vu… [+2643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Christine Idzelis",
            "title": "ETF investors fled cash-like bonds in January, favoring these areas of stocks and fixed income",
            "description": "This week’s ETF Wrap gives you a look at where investors put their money to work in January — and where they didn’t.",
            "url": "https://www.marketwatch.com/story/etf-investors-fled-cash-like-bonds-in-january-favoring-these-areas-of-stocks-and-fixed-income-bedfdd17",
            "urlToImage": "https://images.mktw.net/im-341402/social",
            "publishedAt": "2024-02-01T22:18:00Z",
            "content": "Hello! This weeks ETF Wrap gives you a look at where investors put their money to work in January and where they didnt.Please send feedback and tips to christine.idzelis@marketwatch.com or isabel.wan… [+5300 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Kryptowährung: Bitcoin fällt - Freude über US-Zulassung für Fonds verpufft",
            "description": "Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Bitcoin fällt - Freude über US-Zulassung für Fonds verpufft“.",
            "url": "https://www.zeit.de/news/2024-01/19/bitcoin-faellt-freude-ueber-us-zulassung-fuer-fonds-verpufft",
            "urlToImage": "https://img.zeit.de/news/2024-01/19/bitcoin-faellt-freude-ueber-us-zulassung-fuer-fonds-verpufft-image-group/wide__1300x731",
            "publishedAt": "2024-01-19T09:57:00Z",
            "content": "Nach der Euphorie scheint sich auf dem Kryptomarkt Ernüchterung breitzumachen. Hatte der Bitcoin vor gut einer Woche nach der erstmaligen Zulassung spezieller Börsenfonds auf rund 49.000 Dollar zugel… [+2478 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Marc Stöckel",
            "title": "Per Touch und QR-Code: Bitcoin-Geldautomat ohne Tastatur geknackt",
            "description": "Forscher konnten sich auf einem Bitcoin ATM ohne invasiven Eingriff einen Root-Zugriff verschaffen. Ein QR-Code war dabei ein entscheidendes Werkzeug. (Sicherheitslücke, Security)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fper-touch-und-qr-code-bitcoin-geldautomat-ohne-tastatur-geknackt-2401-181377.html&referer=https%3A%2F%2Ft.co%2Fc8fb913fcf",
            "urlToImage": null,
            "publishedAt": "2024-01-20T11:15:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "MarketWatch",
            "title": "These mutual fund and ETF investing tips give you a strong handle on your money",
            "description": "Don’t miss these top money and investing features: It’s a ‘stockpicker’s paradise.’ These 3 funds could be winners Stock investors pile into China equity...",
            "url": "https://www.marketwatch.com/story/these-mutual-fund-and-etf-investing-tips-give-you-a-strong-handle-on-your-money-5a2dcfde",
            "urlToImage": "https://images.mktw.net/im-425308/social",
            "publishedAt": "2024-01-27T12:31:00Z",
            "content": "Sign up here to get MarketWatchs best mutual funds and ETF stories emailed to you weekly!5 real risks that could crush stocks in 2024 and why they wont\r\nMarket bears will be wrong about recession, in… [+1554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Torrentfreak.com"
            },
            "author": "Ernesto Van der Sar",
            "title": "Authorities Secure $2 Billion in Bitcoin from Pirate Site Operators",
            "description": "Pirate sites can generate significant revenue streams, but they're not billion-dollar operations. With the right timing and risk tolerance, it is possible to build substantial wealth, however, as a German case illustrates. With help from the FBI, German polic…",
            "url": "https://torrentfreak.com/authorities-secure-2-billion-in-bitcoin-from-pirate-site-operators-240130/",
            "urlToImage": "https://torrentfreak.com/images/bitcoin-featured.jpg",
            "publishedAt": "2024-01-30T12:57:56Z",
            "content": "Home\r\n &gt; Anti-Piracy\r\n &gt; Takedowns and Seizures\r\n &gt; \r\nPirate sites can generate significant revenue streams, but they're not billion-dollar operations. With the right timing and risk toleran… [+3049 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Christine Idzelis",
            "title": "China-focused ETFs struggle amid fears of another regulatory ‘crackdown’",
            "description": "Clocktower’s Marko Papic says it’s ‘very difficult for us to tell our clients that there’s any fundamental reason to be bullish’ on Chinese assets",
            "url": "https://www.marketwatch.com/story/china-focused-etfs-struggle-amid-fears-of-another-regulatory-crackdown-47f3f013",
            "urlToImage": "https://images.mktw.net/im-341402/social",
            "publishedAt": "2024-01-18T20:23:00Z",
            "content": "Hi! This weeks ETF Wrap funds looks at China-focused funds that are struggling in 2024, with Clocktowers chief strategist Marko Papic providing his take on concerns tied to the country.Please send fe… [+4917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Christine Idzelis",
            "title": "Why high-yield bond ETFs may deliver ‘surprise’ outperformance in fixed income in 2024",
            "description": "Junk-bond ETFs edged into positive territory on Thursday, while the broader bond market remains in the red.",
            "url": "https://www.marketwatch.com/story/why-high-yield-bond-etfs-may-deliver-surprise-outperformance-in-fixed-income-in-2024-59df8c69",
            "urlToImage": "https://images.mktw.net/im-341402/social",
            "publishedAt": "2024-02-15T22:49:00Z",
            "content": "Hello! For this weeks ETF Wrap, I caught up with Michael Arone, State Streets chief investment strategist, at the Exchange ETF conference in Miami. He shared his take on bonds as ETF investors look f… [+6314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Emily Bary",
            "title": "Coinbase’s stock is controversial, but this new bull sees a 30% gain in store",
            "description": "Two analysts moved away from neutral stances on Coinbase shares this week — and they took opposite views.",
            "url": "https://www.marketwatch.com/story/coinbases-stock-is-controversial-but-this-new-bull-sees-a-30-gain-in-store-3747c3f5",
            "urlToImage": "https://images.mktw.net/im-776137/social",
            "publishedAt": "2024-01-26T15:33:00Z",
            "content": "Coinbase Global Inc. remains a polarizing name on Wall Street. Days after a JPMorgan analyst turned bearish on Coinbases stock \r\n COIN,\r\n +2.39%\r\n,\r\n warning that enthusiasm about new bitcoin ETFs co… [+1843 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Bitcoin knackt die 50.000 Dollar-Marke",
            "description": "Erstmals seit Ende 2021 hat der Bitcoin wieder die Marke von 50.000 Dollar überstiegen. Experten zufolge machen sich die jüngst zugelassenen ETF der Kryptowährung bemerkbar. Verbraucherschützer sind weiter skeptisch.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/bitcoin-rally-kryptowaehrung-100.html",
            "urlToImage": "https://images.tagesschau.de/image/5ec5a66f-3f51-4962-8457-06f0a489a751/AAABjaIjMyg/AAABibBxqrQ/16x9-1280/bitcoin-etf-102.jpg",
            "publishedAt": "2024-02-13T11:39:53Z",
            "content": "Stand: 13.02.2024 12:39 Uhr\r\nErstmals seit Ende 2021 hat der Bitcoin wieder die Marke von 50.000 Dollar überstiegen. Experten zufolge machen sich die jüngst zugelassenen ETF der Kryptowährung bemerkb… [+4363 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Andy Mills",
            "title": "Why Bitcoin won't reach $1,000,000 but you should buy anyway | What's next for Bitcoin?",
            "description": "For a look at the future of the cryptocurrency, Quartz talks with Coindesk’s Andy Baehr",
            "url": "https://qz.com/why-bitcoin-wont-reach-1-000-000-but-you-should-buy-an-1851230435",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/00554241e472f14860593a99fed843d7.jpg",
            "publishedAt": "2024-02-07T12:00:00Z",
            "content": "Our free, fast, and fun briefing on the global economy, delivered every weekday morning."
        },
        {
            "source": {
                "id": null,
                "name": "Small Business Trends"
            },
            "author": "Barbara Weltman",
            "title": "Tax Rules for Cryptocurrency in Your Business",
            "description": "Over 6,300 businesses accepted Bitcoin as payment in 2023. What does accepting this payment mean for your business from a tax perspective?",
            "url": "https://smallbiztrends.com/2024/01/cryptocurrency-tax-rules-for-your-business.html",
            "urlToImage": "https://media.smallbiztrends.com/2024/01/sZVYwyn1-cryptocurrency-tax-rules-for-your-business.png",
            "publishedAt": "2024-01-30T12:00:50Z",
            "content": "According to one source\r\n, over 6,300 businesses accepted Bitcoin as payment in 2023, which was triple the number in 2022. The writing is on the wall: acceptance of digital currency as a payment meth… [+5156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wwwhatsnew.com"
            },
            "author": "Juan Diego Polo",
            "title": "La identidad del creador de Bitcoin vuelve a ocupar portadas",
            "description": "La reciente controversia en un tribunal de Londres sobre la verdadera identidad del creador de Bitcoin resalta una fascinante intriga que ha dominado el mundo de la criptomoneda desde sus inicios. La figura misteriosa de Satoshi Nakamoto, que se esconde detrá…",
            "url": "https://wwwhatsnew.com/2024/02/09/la-identidad-del-creador-de-bitcoin-vuelve-a-ocupar-portadas/",
            "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2024/02/creador-del-bitcoin.jpg",
            "publishedAt": "2024-02-08T23:00:20Z",
            "content": "La reciente controversia en un tribunal de Londres sobre la verdadera identidad del creador de Bitcoin resalta una fascinante intriga que ha dominado el mundo de la criptomoneda desde sus inicios. La… [+3590 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Matt Novak / Gizmodo",
            "title": "Yes, the bitcoin hype cycle is back",
            "description": "It’s safe to say crypto is experiencing renewed interest since the crash of 2022. Bitcoin just hit its highest price since 2021, the SEC’s approval of spot Bitcoin ETFs has investors very excited, and the market cap for all crypto just breached $2 trillion. B…",
            "url": "https://qz.com/bitcoin-price-etf-hype-cycle-1851260035",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b9739c26bbf67c8e694b2807ad8c32cd.jpg",
            "publishedAt": "2024-02-15T14:36:36Z",
            "content": "Its safe to say crypto is experiencing renewed interest since the crash of 2022. Bitcoin just hit its highest price since 2021, the SECs approval of spot Bitcoin ETFs has investors very excited, and … [+4410 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Florian Bayard",
            "title": "Le Bitcoin fait son retour au-dessus des 50 000 dollars : pourquoi la crypto s’envole",
            "description": "Le Bitcoin est de retour en force. Après des mois à panser ses plaies, la doyenne des cryptomonnaies vient de repasser la barre symbolique des 50 000 dollars, portée par l'approbation des premiers ETF aux États-Unis.",
            "url": "https://www.01net.com/actualites/bitcoin-fait-retour-dessus-50-000-dollars-pourquoi-crypto-senvole.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/02/cours-bitcoin-etf-halving-decolle.jpg",
            "publishedAt": "2024-02-14T11:50:54Z",
            "content": "Le Bitcoin est de retour en force. Après des mois à panser ses plaies, la doyenne des cryptomonnaies vient de repasser la barre symbolique des 50 000 dollars, portée par l’approbation des premiers ET… [+4805 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Whiskey, Rolexes, and trading cards are in a spiraling crash as \"the bubbles have popped\" in collectibles",
            "description": "Stocks surged in 2023, but it was a rougher year for assets like whiskey, fine wine, and luxury watches.",
            "url": "https://markets.businessinsider.com/news/stocks/whiskey-rolexes-trading-cards-collectibles-federal-reserve-stock-market-outlook-2024-1",
            "urlToImage": "https://i.insider.com/65a9134f43bb77284b9e04f8?width=1200&format=jpeg",
            "publishedAt": "2024-01-18T14:23:03Z",
            "content": "Atlanta Braves pitcher Spencer Strider opens a pack of baseball cards during 2023 All-Star Week.Lindsey Wasson/AP Photo\r\n<ul>\n<li>Stocks surged in 2023, but it was a rougher year for collectibles.</l… [+3914 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Alex Bitter",
            "title": "Bots are some DoorDash and Walmart Spark delivery gig workers' dirty secret",
            "description": "Gig workers on delivery apps like DoorDash are turning to bots to claim high-paying orders as pay falls and competition rises for drivers.",
            "url": "https://www.businessinsider.com/gig-workers-using-bots-claim-orders-delivery-apps-doordash-spark-2024-1",
            "urlToImage": "https://i.insider.com/655e5be522cf74a5739bbdff?width=1200&format=jpeg",
            "publishedAt": "2024-02-10T10:42:02Z",
            "content": "A DoorDash delivery worker in New York City.Ribeiro/New York Daily News/Tribune News Service via Getty Images\r\n<ul><li>\"Bots,\" or apps that make it easier to claim orders, are proliferating on delive… [+5555 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-sun.com"
            },
            "author": "Iona Cleave",
            "title": "Bitcoin King to be unmasked...",
            "description": "THE real identity of Bitcoin founder Satoshi Nakamoto could finally be revealed, unlocking the key to his £36billion fortune. A UK court will now decide if Craig Wright, 54, is the mysterious, anon…",
            "url": "https://www.the-sun.com/news/10290281/bitcoin-founder-satoshi-nakamoto-revealed/",
            "urlToImage": "https://www.the-sun.com/wp-content/uploads/sites/6/2024/02/2016-creator-previously-known-pseudonym-231801778.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2024-02-05T18:01:39Z",
            "content": "THE real identity of Bitcoin founder Satoshi Nakamoto could finally be revealed, unlocking the key to his £36billion fortune. \r\nA UK court will now decide if Craig Wright, 54, is the mysterious, anon… [+7650 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Quartz Bot",
            "title": "Weekend Business News Roundup February 03, 2024",
            "description": "Brenda Chunga, known online as “Bitcoin Beautee,” was the American face of an Australian Ponzi scheme called HyperFund.Read more...",
            "url": "https://qz.com/weekend-business-news-roundup-february-03-2024-1851220701",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/dbbb6c4a23d4839c9f4f38606c7bb30c.jpg",
            "publishedAt": "2024-02-03T09:00:00Z",
            "content": "Brenda Chunga, known online as Bitcoin Beautee, was the American face of an Australian Ponzi scheme called HyperFund.\r\nChunga made nearly $4 million promoting the schemewhich defrauded investors acro… [+288 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Laura Bratton",
            "title": "\"Bitcoin Beautee\" is pleading guilty to her role in a $2 billion crypto Ponzi scheme",
            "description": "Brenda Chunga, known online as “Bitcoin Beautee,” was the American face of an Australian Ponzi scheme called HyperFund.Read more...",
            "url": "https://qz.com/cryptocurrency-crypto-bitcoin-fraud-hyperfund-ftx-sam-b-1851209134",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/67f64876da26c0a21a3f4fabd141a9a8.jpg",
            "publishedAt": "2024-01-30T17:46:00Z",
            "content": "Brenda Chunga, known online as Bitcoin Beautee, was the American face of an Australian Ponzi scheme called HyperFund.\r\nChunga made nearly $4 million promoting the schemewhich defrauded investors acro… [+1988 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wwwhatsnew.com"
            },
            "author": "Juan Diego Polo",
            "title": "El ataque que ha afectado al mercado de Bitcoin",
            "description": "Recientemente, la Comisión de Bolsa y Valores (SEC) de Estados Unidos se encontró en el centro de un incidente de seguridad digital que sacudió no solo a la institución, sino también al volátil mercado de las criptomonedas. Este incidente, que involucra un at…",
            "url": "https://wwwhatsnew.com/2024/01/28/el-ataque-que-ha-afectado-al-mercado-de-bitcoin/",
            "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2024/01/tec-1020.jpg",
            "publishedAt": "2024-01-28T07:00:16Z",
            "content": "Recientemente, la Comisión de Bolsa y Valores (SEC) de Estados Unidos se encontró en el centro de un incidente de seguridad digital que sacudió no solo a la institución, sino también al volátil merca… [+4468 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Melvin Backman",
            "title": "Lots of people started selling bitcoin after the SEC made it easier to buy two weeks ago",
            "description": "There was a whole lot of excitement around the prospect of exchange-traded bitcoin funds a couple weeks ago, when the US Securities and Exchange Commission announced that it had approved use of the investing tool. Someone even hacked the SEC’s account on the …",
            "url": "https://qz.com/lots-of-people-started-selling-bitcoin-after-the-sec-ma-1851190395",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/fb09f7ab32c9ab32711162accdc6c3f8.jpg",
            "publishedAt": "2024-01-23T22:19:00Z",
            "content": "There was a whole lot of excitement around the prospect of exchange-traded bitcoin funds a couple weeks ago, when the US Securities and Exchange Commission announced that it had approved use of the i… [+1554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Melvin Backman",
            "title": "Bitcoin could hit $50,000 soon as a new crowd of buyers drives up prices",
            "description": "Back in January the US government said that exchange-traded funds, or ETFs, could start investing in bitcoin. Someone got so excited they hacked the US Securities and Exchange Commission’s website to break the news just a little bit earlier. Though a bunch of…",
            "url": "https://qz.com/bitcoin-new-buyers-value-1851242532",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b799be84f04316f5f562b71b3b12dd2e.jpg",
            "publishedAt": "2024-02-09T16:58:00Z",
            "content": "Back in January the US government said that exchange-traded funds, or ETFs, could start investing in bitcoin. Someone got so excited they hacked the US Securities and Exchange Commissions website to … [+1455 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Weston Blasi",
            "title": "Larry David says he was an ‘idiot’ for starring in an FTX crypto ad in 2022",
            "description": "The ‘Curb Your Enthusiasm’ star also says he ‘lost a lot of money’ on crypto",
            "url": "https://www.marketwatch.com/story/larry-david-says-he-was-an-idiot-for-starring-in-an-ftx-crypto-ad-in-2022-dc13afdf",
            "urlToImage": "https://images.mktw.net/im-09169626/social",
            "publishedAt": "2024-02-01T18:49:00Z",
            "content": "Larry David addressed his 2022 commercial for the now-defunct crypto exchange FTX in which he touted how he is never wrong about a series of iconic inventions throughout history.During a red carpet e… [+1394 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Enriquedans.com"
            },
            "author": "Enrique Dans",
            "title": "¿Son indestructibles las criptomonedas?",
            "description": "La reciente aprobación de varios fondos de inversión en bitcoin y la entrada de una gran cantidad de nuevos inversores en pos de una rentabilidad, la asociada con la creciente popularización de las criptomonedas, que parece seguir los patrones lógicos en toda…",
            "url": "https://www.enriquedans.com/2024/01/son-indestructibles-las-criptomonedas.html",
            "urlToImage": "https://www.enriquedans.com/wp-content/uploads/2024/01/Crypto-Google-Finance.jpg",
            "publishedAt": "2024-01-26T13:56:42Z",
            "content": "La reciente aprobación de varios fondos de inversión en bitcoin y la entrada de una gran cantidad de nuevos inversores en pos de una rentabilidad, la asociada con la creciente popularización de las c… [+3059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Melvin Backman",
            "title": "All the bitcoin on Earth is worth $1 trillion again",
            "description": "Bitcoin keeps on rising. The cryptocurrency’s price is knocking on $52,000, the highest level since June 2021. That’s enough to send its market capitalization above $1 trillion.Read more...",
            "url": "https://qz.com/bitcoin-etfs-crypto-1-trillion-1851255727",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2675ec3660af3940df41ebfd5ed3d402.jpg",
            "publishedAt": "2024-02-14T15:55:00Z",
            "content": "Bitcoin keeps on rising. The cryptocurrencys price is knocking on $52,000, the highest level since June 2021. Thats enough to send its market capitalization above $1 trillion.\r\nThe market has shaken … [+1074 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "US regulator admits cyber-security lapse before rogue Bitcoin post",
            "description": "Regulator admits key security procedure on X account was suspended six months before it was hacked.",
            "url": "https://www.bbc.co.uk/news/technology-68025683",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/85DB/production/_132376243_mediaitem132376241.jpg",
            "publishedAt": "2024-01-23T13:27:32Z",
            "content": "The US financial regulator has confirmed a key security procedure on its X account had been suspended for six months when hackers made a fake post about Bitcoin in January.\r\nThe cryptocurrency surged… [+2455 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Clem Chambers, Senior Contributor, \n Clem Chambers, Senior Contributor\n https://www.forbes.com/sites/investor/people/clem/",
            "title": "Bitcoin ETF Launch Crashes Bitcoin: What Now?",
            "description": "Bitcoin has taken a pounding on the release of the bitcoin spot ETFs.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/01/29/bitcoin-etf-launch-crashes-bitcoin-what-now/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64dcd56bb9f53bfc4f3d5163/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-01-29T19:22:58Z",
            "content": "Bitcoin Exchange-traded fund (ETF) launch concept. Slovenia, December 24, 2018\r\ngetty\r\nBitcoin has taken a pounding on the release of the bitcoin spot ETFs. I feel like saying, I told you so. However… [+1988 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Melvin Backman",
            "title": "Bitcoin's price has more than doubled in the last year to $50,000",
            "description": "Back in late 2022, the price of bitcoin was stuck around a measly $16,000. It had lost three-quarters of the value it had racked up during an early-pandemic bull run. But then came the so-called “crypto winter.” Sam Bankman-Fried’s FTX exchange went down in a…",
            "url": "https://qz.com/bitcoins-price-has-more-than-doubled-in-the-last-year-t-1851248818",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a5191bc18cce54c7682c7191e9a857bb.jpg",
            "publishedAt": "2024-02-12T18:26:00Z",
            "content": "Back in late 2022, the price of bitcoin was stuck around a measly $16,000. It had lost three-quarters of the value it had racked up during an early-pandemic bull run. But then came the so-called cryp… [+1027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Self-proclaimed bitcoin inventor denies forging documents to support claim",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_fc13309e-95c2-41ee-8f6b-53759d6afc82",
            "urlToImage": null,
            "publishedAt": "2024-02-06T13:52:45Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 243 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Daniel AJ Sokolov",
            "title": "FTX-Konkursverwalter macht Kunden Hoffnung auf Entschädigung",
            "description": "Eines Tages soll die FTX-Masse alle Kundenguthaben voll auszahlen. Diese Ankündigung hat Trillionen Fußnoten. U.a. Steuerzahler zahlen drauf.​",
            "url": "https://www.heise.de/news/FTX-Konkursverwalter-macht-Kunden-Hoffnung-auf-Entschaedigung-9614993.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/2/5/0/shutterstock_2155067343-cbab8f25fc8775f2.jpg",
            "publishedAt": "2024-01-31T22:23:00Z",
            "content": "Inhaltsverzeichnis\r\nMehr als zwei Millionen Forderungen sind gegen die Masse der zusammengebrochenen Kryptowährungsbörse FTX erhoben. Die Gesamtsumme dieser Forderungen beläuft sich auf 23,8 Trillion… [+6057 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Abubakar Nur Khalil, Contributor, \n Abubakar Nur Khalil, Contributor\n https://www.forbes.com/sites/abubakarnurkhalil/",
            "title": "Bitcoin Java Cards Could Help Bank Millions In Africa & Billions Next",
            "description": "The Bitcoin developer behind Machankura, Kgothatso, announced a Bitcoin Java Card project to enable feature phones to become bitcoin hardware devices.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/01/31/bitcoin-java-cards-could-help-bank-millions-in-africa--billions-next/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65ba6b2650603ec9a78baa5f/0x0.jpg?format=jpg&crop=2000,1124,x0,y73,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-01-31T15:48:25Z",
            "content": "Photographer: Luke Dray/Bloomberg\r\n© 2024 Bloomberg Finance LP\r\nOver the last month, with most of the global bitcoin news cycle bandwidth flooded with ETF news, Bitcoin developers continue doubling d… [+3967 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Abubakar Nur Khalil, Contributor, \n Abubakar Nur Khalil, Contributor\n https://www.forbes.com/sites/abubakarnurkhalil/",
            "title": "Bitwise Become First To Disclose Bitcoin ETF Holdings Address",
            "description": "On Jan 24, Bitwise published the bitcoin address of its spot Bitcoin ETF (BITB) holdings, becoming the first bitcoin ETF provider to do so in the US.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/01/25/bitwise-become-first-to-disclose-bitcoin-etf-holdings-address/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65b2dce4f43cb9f94d2b94a3/0x0.jpg?format=jpg&crop=2000,937,x0,y163,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-01-26T00:38:24Z",
            "content": "Bitwise Spot Bitcoin ETF (BITB) signage on the floor of the New York Stock Exchange (NYSE) in New ... [+] York, US, on Thursday, Jan. 11, 2024. Photographer: Michael Nagle/Bloomberg\r\n© 2024 Bloomberg… [+3396 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Liam Wright, Contributor, \n Liam Wright, Contributor\n https://www.forbes.com/sites/liamwright/",
            "title": "How New Bitcoin ETFs Affect The Bitcoin Price",
            "description": "Bitcoin ETFs have a complex relationship with the price of bitcoin. Unlike exchange purchases, buying shares in an ETF does not always directly affect bitcoin's price.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/02/01/how-new-bitcoin-etfs-affect-the-bitcoin-price/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65bc00f95a32113d251f5201/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-02-01T21:27:00Z",
            "content": "A smart phone is displaying the Bitwise Bitcoin ETF stock on the NASDAQ market in this photo ... [+] illustration, in Brussels, Belgium, on January 12, 2024. (Photo by Jonathan Raa/NurPhoto via Getty… [+4708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCWorld"
            },
            "author": "PCWelt staff",
            "title": "Bitcoin and crypto explained: What beginners need to know",
            "description": "Bitcoin and blockchain are on everyone’s lips, but for many people they are a closed book. The topic is indeed complex. We’ll try to explain the most important terms as clearly as possible.\r\n\n\n\n\nBitcoin (BTC) is a digital currency. The name is a combination o…",
            "url": "https://www.pcworld.com/article/2220832/bitcoin-and-crypto-explained-what-beginners-need-to-know.html",
            "urlToImage": "https://www.pcworld.com/wp-content/uploads/2024/02/bitcoin_teaser.jpg?quality=50&strip=all&w=1024",
            "publishedAt": "2024-02-08T12:30:00Z",
            "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nPCWorldFeb 8, 2024 4… [+15204 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mediapart"
            },
            "author": "Matthieu Suc",
            "title": "Affaire Bitcoin: les confidences d’un hacker de la DGSI",
            "description": "Missionné par la DGSI pour pirater des sites djihadistes, «Sh0ck»\" \"a découvert des années après avoir arrêté que son propre officier traitant l’avait spolié d’une partie de la rémunération que le service de renseignement lui versait.",
            "url": "https://www.mediapart.fr/journal/france/060224/affaire-bitcoin-les-confidences-d-un-hacker-de-la-dgsi",
            "urlToImage": "https://static.mediapart.fr/etmagine/og/journal/files/2024/02/05/20240205-img-l-affaire-bitcoin-comment-un-agent-de-la-dgsi-detourne-pres-d-un-million-d-euros-2-1.jpg",
            "publishedAt": "2024-02-06T06:28:23Z",
            "content": "Les cookies et technologies similaires que nous utilisons sur Mediapart sont de différentes natures et nous permettent de poursuivre différentes finalités. \r\nCertains sont nécessaires au fonctionneme… [+1247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "coinjournal.net",
            "title": "Bitcoin Dogs aims to take the lead with first ever BRC-20 ICO",
            "description": "Analysts foresee a possible Bitcoin surge to $50,000 amid the heightened Bitcoin halving hype. Bitcoin Dogs unveils $0DOG token presale, the first BRC-20 ICO on the Bitcoin blockchain. $0DOG offers access to Bitcoin Dogs’ NFT collection and immersive gaming e…",
            "url": "https://biztoc.com/x/89e4101af3b132aa",
            "urlToImage": "https://c.biztoc.com/p/89e4101af3b132aa/s.webp",
            "publishedAt": "2024-02-09T13:08:16Z",
            "content": "Analysts foresee a possible Bitcoin surge to $50,000 amid the heightened Bitcoin halving hype.Bitcoin Dogs unveils $0DOG token presale, the first BRC-20 ICO on the Bitcoin blockchain.$0DOG offers acc… [+281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Florian Bayard",
            "title": "L’IA et la crypto vont faire exploser la consommation des data centers",
            "description": "L'intelligence artificielle et le minage de cryptomonnaies sont responsables d'une augmentation de la consommation énergétique des data centers, indique une étude. Dans les années à venir, le besoin en électricité des centres de données pourrait être multipli…",
            "url": "https://www.01net.com/actualites/lia-crypto-exploser-consommation-data-centers.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/01/ia-crypto-serveurs-data-centers-electricite.jpg",
            "publishedAt": "2024-01-25T09:25:24Z",
            "content": "L’intelligence artificielle et le minage de cryptomonnaies sont responsables d’une augmentation de la consommation énergétique des data centers, indique une étude. Dans les années à venir, le besoin … [+3803 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Face-Ripping Rally Incoming’—Why The Bitcoin, Ethereum And XRP Price Boom Could Be Just Getting Started",
            "description": "One closely-watched bitcoin and crypto analyst has just raised his bitcoin price target...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/02/18/face-ripping-rally-incoming-why-the-bitcoin-ethereum-and-xrp-price-boom-could-be-just-getting-started/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/5f556bd7e448cee8959fa103/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-02-18T12:50:22Z",
            "content": "BitcoinBTC\r\n and the wider crypto market have pulled off a dramatic recovery over the last year, with the bitcoin price up 100%, ethereum up 60% and XRPXRP\r\n up 35%.\r\nSubscribe now to Forbes' CryptoA… [+3711 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dnyuz.com"
            },
            "author": "New York Times",
            "title": "Anxiety, Mood Swings and Sleepless Nights: Life Near Bitcoin Mine...",
            "description": "Anxiety, Mood Swings and Sleepless Nights: Life Near Bitcoin Mine...\r\n\n \n \n \n (Second column, 17th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
            "url": "https://dnyuz.com/2024/02/03/anxiety-mood-swings-and-sleepless-nights-life-near-a-bitcoin-mine/",
            "urlToImage": "https://dnyuz.com/wp-content/uploads/2024/02/Anxiety-Mood-Swings-and-Sleepless-Nights-Life-Near-a-Bitcoin.jpg",
            "publishedAt": "2024-02-03T14:19:39Z",
            "content": "On a sweltering July evening, the din from thousands of computers mining for Bitcoins pierced the night. Nearby, Matt Brown, a member of the Arkansas legislature, monitored the noise alongside a loca… [+13652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Justin Colombo",
            "title": "How to Bet on Sports – A Beginner’s Guide to Online Sports Betting",
            "description": "Learning how to bet on sports is becoming a necessary skill for most avid sports fans nowadays. When most sports […]\nThe post How to Bet on Sports – A Beginner’s Guide to Online Sports Betting appeared first on ReadWrite.",
            "url": "https://readwrite.com/gambling/guides/how-to-bet-on-sports/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/pexels-giovanni-garnica-13096563-scaled.jpg",
            "publishedAt": "2024-02-01T08:41:33Z",
            "content": "Learning how to bet on sports is becoming a necessary skill for most avid sports fans nowadays. When most sports fans turn on their television to watch their favorite teams, there’s a new industry vy… [+17665 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "Would You Trust A Cryptocurrency Whose Operator Sues Journalists For Reporting On Lawsuits Calling You A Scam?",
            "description": "In the fall of 2022 an apparent investor in a cryptocurrency called “Bitcoin Latinum” sued the guy behind the currency, Donald Basile. You can see the whole case here. There has been a bunch of back and forth on the docket, but it appears the remaining partie…",
            "url": "https://www.techdirt.com/2024/02/12/would-you-trust-a-cryptocurrency-whose-operator-sues-journalists-for-reporting-on-lawsuits-calling-you-a-scam/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-02-12T18:56:14Z",
            "content": "from the slapp-silly dept\r\nIn the fall of 2022 an apparent investor in a cryptocurrency called Bitcoin Latinum sued the guy behind the currency, Donald Basile. You can see the whole case here. There … [+7220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Sudden Crypto ETF Crash Panic Sends Bitcoin To $40,000—Hitting The Price Of Ethereum, Solana And XRP",
            "description": "Bitcoin and crypto traders are nervously eyeing outflows from Grayscale's bitcoin trust (GBTC), freshly converted into a fully-fledged spot bitcoin ETF—with JPMorgan warning $1.5 billion could still be yanked from the fund in coming weeks...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/01/22/sudden-crypto-etf-crash-panic-sends-bitcoin-to-40000-hitting-the-price-of-ethereum-solana-and-xrp/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/1063787606/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-01-22T10:28:02Z",
            "content": "BitcoinBTC\r\n, ethereum and other major cryptocurrencies solana and XRPXRP\r\n have suffered a huge crashjust after JPMorgan's CEO issued a wild warning that Satoshi Nakamoto could \"erase\" bitcoin entir… [+3714 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (

            <div className="container my-3">
                <h2>N.E.W.S - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title.slice(0, 43)} description={element.description} imageURL={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}
                </div>
            </div>

        )
    }
}

export default News
