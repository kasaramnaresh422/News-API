import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsService {
    constructor(private httpClient: HttpClient) { }

    getNews() {

        return {
            "status": "ok",
            "totalResults": 3489211,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "If You Can't Update Windows 10, Blame Your Realtek Drivers",
                    "description": "Here’s the good news: If you haven’t updated your Realtek Bluetooth drivers in some time, or don’t even know that’s a thing, you can finally update to Windows 10 version 1909—the latest and greatest iteration of the operating system as of when we published th…",
                    "url": "https://lifehacker.com/if-you-cant-update-windows-10-blame-your-realtek-drive-1839927383",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/nkbwlry7bffyjq58lwns.jpg",
                    "publishedAt": "2019-11-20T18:00:00Z",
                    "content": "Heres the good news: If you havent updated your Realtek Bluetooth drivers in some time, or dont even know thats a thing, you can finally update to Windows 10 version 1909the latest and greatest iteration of the operating system as of when we published this ar… [+3357 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Brendan Hesse",
                    "title": "How to Make uBlock Origin Even Better at Ad Blocking in Firefox",
                    "description": "Firefox is one of the best browsers for blocking ads and crappy web trackers, and you can make it even better using “nuke-’em-all” browser extensions like uBlock Origin. Now, Ghacks and GitHub users point out that uBlock Origins is even capable of blocking ne…",
                    "url": "https://lifehacker.com/how-to-make-ublock-origin-even-better-at-ad-blocking-in-1839964889",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/oqpetyavgwsnmwosnyvn.jpg",
                    "publishedAt": "2019-11-20T19:15:00Z",
                    "content": "Firefox is one of the best browsers for blocking ads and crappy web trackers, and you can make it even better using nuke-em-all browser extensions like uBlock Origin. Now, Ghacks and GitHub users point out that uBlock Origins is even capable of blocking new t… [+1582 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Nick Douglas",
                    "title": "Play Chess Against Simulated Grand Masters on Chess DB",
                    "description": "I just lost at chess to Bobby Fischer, three times in a row. Then for a change of pace, I lost to Magnus Carlsen, world champion since 2013. Then I lost to the lowest-ranked player I could choose, 15-year-old Abhishek K. Over 29,000 people can play chess bett…",
                    "url": "https://lifehacker.com/play-chess-against-simulated-grand-masters-on-chess-db-1839988161",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/wa0dk8yathc9mzvxejgb.jpg",
                    "publishedAt": "2019-11-22T18:00:00Z",
                    "content": "I just lost at chess to Bobby Fischer, three times in a row. Then for a change of pace, I lost to Magnus Carlsen, world champion since 2013. Then I lost to the lowest-ranked player I could choose, 15-year-old Abhishek K. Over 29,000 people can play chess bett… [+1333 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "You Can Now Install Windows 10 on Your 16-Inch MacBook Pro",
                    "description": "I know, I know; it sounds a bit sacreligious if you just plunked down $2,000+ for a new 16-inch MacBook Pro, but we live in a day and age where kittens and puppies can be friends. And if you want to run macOS and Windows 10 on the same system, you should feel…",
                    "url": "https://lifehacker.com/you-can-now-install-windows-10-on-your-16-inch-macbook-1839961622",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/yctkga4bc7p66arilbln.jpg",
                    "publishedAt": "2019-11-21T15:00:00Z",
                    "content": "I know, I know; it sounds a bit sacreligious if you just plunked down $2,000+ for a new 16-inch MacBook Pro, but we live in a day and age where kittens and puppies can be friends. And if you want to run macOS and Windows 10 on the same system, you should feel… [+1173 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Brendan Hesse",
                    "title": "How to Add Two-Factor Authentication to Your Twitter Account",
                    "description": "Using two-factor authentication (2FA) is a smart, simple tactic to add a little extra data security in your life. For those unaware, 2FA is when you use a secondary authentication method—like code generator apps or Bluetooth keys—to validate your identity whe…",
                    "url": "https://lifehacker.com/how-to-add-two-factor-authentication-to-your-twitter-ac-1840004011",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dvch2ngmeag5pmddpzl2.jpg",
                    "publishedAt": "2019-11-22T19:45:00Z",
                    "content": "Using two-factor authentication (2FA) is a smart, simple tactic to add a little extra data security in your life. For those unaware, 2FA is when you use a secondary authentication methodlike code generator apps or Bluetooth keysto validate your identity when … [+1587 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Brendan Hesse on Offspring, shared by Brendan Hesse to Lifehacker",
                    "title": "Record and Share Bedtime Stories for Your Kid Using Google Home",
                    "description": "For most parents, sharing a nighttime story with their child is a precious and important time, but sometimes the tucking-in duties fall to baby sitters and other family members. The latest Google Home update adds a new “My Storytime” feature that lets parents…",
                    "url": "https://offspring.lifehacker.com/record-and-share-bedtime-stories-for-your-kid-using-goo-1840005107",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/gplpe5dqhi1dpi6qaml9.png",
                    "publishedAt": "2019-11-22T21:30:00Z",
                    "content": "For most parents, sharing a nighttime story with their child is a precious and important time, but sometimes the tucking-in duties fall to baby sitters and other family members. The latest Google Home update adds a new My Storytime feature that lets parents r… [+1284 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Jalopnik.com"
                    },
                    "author": "Tom McParland on Jalopnik, shared by Virginia K. Smith to Lifehacker",
                    "title": "I Want A Flashy Car Than Can Do Burnouts For $35,000! What Car Should I Buy?",
                    "description": "Vlad just landed an adult job, so he is looking to spend adult money on a car. But he’s a young guy and he doesn’t want to be too mature about it. He is looking for something nice but flashy, with enough power to lay down some rubber in a straight line. What …",
                    "url": "https://jalopnik.com/i-want-a-flashy-car-than-can-do-burnouts-for-35-000-w-1839855071",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jpqllwbzoikjl1xerlds.jpg",
                    "publishedAt": "2019-11-21T17:34:00Z",
                    "content": "Vlad just landed an adult job, so he is looking to spend adult money on a car. But hes a young guy and he doesnt want to be too mature about it. He is looking for something nice but flashy, with enough power to lay down some rubber in a straight line. What ca… [+6607 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Nick Douglas",
                    "title": "Use 'Summits' As a Field Guide to Mountain Climbing",
                    "description": "Summits is a mountain-by-mountain guide to climbing. Each mountain in the Summits database has its own page with detailed climbing directions both quantitative and qualitative, making it a great way to prepare to visit a particular mountain, or even choose wh…",
                    "url": "https://lifehacker.com/use-summits-as-a-field-guide-to-mountain-climbing-1839965802",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ljpjo1xlylj6fcdqxtaj.png",
                    "publishedAt": "2019-11-21T18:30:00Z",
                    "content": "Summits is a mountain-by-mountain guide to climbing. Each mountain in the Summits database has its own page with detailed climbing directions both quantitative and qualitative, making it a great way to prepare to visit a particular mountain, or even choose wh… [+969 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "Change Your GateHub and EpicBot Passwords Now",
                    "description": "It’s kind of a random pairing—I get it—but two new websites have joined ‘have i been pwned’s’ illustrious list of breached sites. One is a cryptocurrency wallet and the other is a RuneScape bot. These sound like small potatoes, but the two breaches have poten…",
                    "url": "https://lifehacker.com/change-your-gatehub-and-epicbot-passwords-now-1839980707",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/idjpgelaby7rd7opb8dy.jpg",
                    "publishedAt": "2019-11-21T19:00:00Z",
                    "content": "Its kind of a random pairingI get itbut two new websites have joined have i been pwneds illustrious list of breached sites. One is a cryptocurrency wallet and the other is a RuneScape bot. These sound like small potatoes, but the two breaches have potentially… [+2330 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Emily Price",
                    "title": "How to Watch the AMAs Tonight Without Cable",
                    "description": "The American Music Awards are tonight. The action officially kicks off at 8pm ET and will be broadcast on ABC. Read more...",
                    "url": "https://lifehacker.com/how-to-watch-the-amas-tonight-without-cable-1840021726",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jnbfevhkifhqfxcmt9ch.jpg",
                    "publishedAt": "2019-11-24T18:26:00Z",
                    "content": "The American Music Awards are tonight. The action officially kicks off at 8pm ET and will be broadcast on ABC.\r\nPost Malone leads the pack in terms of nominations this year with seven. Ariana Grande and Billie Eilish are both a close second with six nominatio… [+1044 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "Save $300 on the Last MacBook Air With a Good Keyboard",
                    "description": "Amazon Read more...",
                    "url": "https://lifehacker.com/save-300-on-the-last-macbook-air-with-a-good-keyboard-1840048880",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qdcy2ylbj224p2lptqmz.jpg",
                    "publishedAt": "2019-11-26T17:45:00Z",
                    "content": "Amazon\r\nThe problem: You want a Mac that doesnt have a crappy keyboard, but you cant afford (or dont need) the brand-new 16-inch MacBook Pro. You can either go scrounging for a 2015 MacBook Proa Mac I grew quite fond ofor deal with a cheaper, less-powerful al… [+1165 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Melanie Pinola and Lisa Rowan",
                    "title": "How to Use Your Flexible Savings Account to Save Money and Avoid Wasting Benefits",
                    "description": "It’s that time of year again: Open enrollment season for your employer benefits, which, if you’re lucky, includes the Flexible Spending Account (FSA). If you’ve always told yourself around this time “I should really take advantage of my FSA” but never do, now…",
                    "url": "https://lifehacker.com/how-to-use-your-flexible-savings-account-to-save-money-5855970",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/yd82xlchzz7hjvwr4jui.jpg",
                    "publishedAt": "2019-11-25T15:02:00Z",
                    "content": "Its that time of year again: Open enrollment season for your employer benefits, which, if youre lucky, includes the Flexible Spending Account (FSA). If youve always told yourself around this time I should really take advantage of my FSA but never do, nows the… [+7320 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Beth Skwarecki on Vitals, shared by Beth Skwarecki to Lifehacker",
                    "title": "The Best Advice I Learned From My First Powerlifting Meet",
                    "description": "I’ve been lifting for a long time, but only really got serious about my squat, bench, and deadlift a little over a year ago. Last week I finally did a powerlifting meet. I had a great time, learned a lot, and put a lot of the beginner advice I’d been given to…",
                    "url": "https://vitals.lifehacker.com/the-best-advice-i-learned-from-my-first-powerlifting-me-1840067277",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/sppmjcsywd24ezrxqxpd.jpg",
                    "publishedAt": "2019-11-27T17:30:00Z",
                    "content": "Ive been lifting for a long time, but only really got serious about my squat, bench, and deadlift a little over a year ago. Last week I finally did a powerlifting meet. I had a great time, learned a lot, and put a lot of the beginner advice Id been given to t… [+7556 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Nicole Dieker",
                    "title": "Don't Give People Presents That Are Actually Chores",
                    "description": "If you’re getting started on your holiday shopping this weekend, here’s a tip: ask yourself whether you’re giving the recipient something they truly want, or something that will add extra work to their life. Read more...",
                    "url": "https://lifehacker.com/dont-give-people-presents-that-are-actually-chores-1840067026",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/i40vyppubdg4p6keyxfz.jpg",
                    "publishedAt": "2019-11-27T18:00:00Z",
                    "content": "If youre getting started on your holiday shopping this weekend, heres a tip: ask yourself whether youre giving the recipient something they truly want, or something that will add extra work to their life.\r\nProductivity and personal growth expert Nicholas Bate… [+1814 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Whitson Gordon and Elizabeth Yuko",
                    "title": "Put Eggs in a Bowl of Water to See If They've Gone Bad",
                    "description": "Eggs are one of those great versatile foods that’s great to keep in the fridge for last-minute meals. But part of being a refrigerator staple is that sometimes we can forget about that carton we bought a few weeks ago. No one like a rotten egg, so how can you…",
                    "url": "https://lifehacker.com/put-eggs-in-a-bowl-of-water-to-see-if-theyve-gone-bad-5899893",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bljjl5i1bpbuxonjrzwc.jpg",
                    "publishedAt": "2019-11-26T18:01:00Z",
                    "content": "Eggs are one of those great versatile foods thats great to keep in the fridge for last-minute meals. But part of being a refrigerator staple is that sometimes we can forget about that carton we bought a few weeks ago. No one like a rotten egg, so how can you … [+2238 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Eric Ravenscraft",
                    "title": "How to Survive a Party or Social Gathering as an Introvert",
                    "description": "Over the past few years, we’ve heard a lot about the differences between introverts and extroverts, including on this site. Whether or not you believe the distinctions are significant, there are definitely people out there who read the descriptions of introve…",
                    "url": "https://lifehacker.com/how-to-survive-a-party-or-social-gathering-as-an-introv-1619955860",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/onfvklxnd6klypzvoy5t.jpg",
                    "publishedAt": "2019-11-26T15:44:00Z",
                    "content": "Over the past few years, weve heard a lot about the differences between introverts and extroverts, including on this site. Whether or not you believe the distinctions are significant, there are definitely people out there who read the descriptions of introver… [+11430 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Meghan Moravcik Walbert",
                    "title": "Continue Using Apostrophes Correctly, We Beg of You",
                    "description": "Those of us who respect and appreciate proper apostrophe usage awoke yesterday to some upsetting news: John Richards, one of the most ardent defenders of the correct use of the apostrophe, is  giving up. He posted his reasons for this decision on the website …",
                    "url": "https://lifehacker.com/continue-using-apostrophes-correctly-we-beg-of-you-1840153203",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/rkm7uhwpjguslo1jxff3.jpg",
                    "publishedAt": "2019-12-03T18:00:00Z",
                    "content": "Those of us who respect and appreciate proper apostrophe usage awoke yesterday to some upsetting news: John Richards, one of the most ardent defenders of the correct use of the apostrophe, is giving up. He posted his reasons for this decision on the website o… [+3196 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "Get Live Captions and Pixel Themes With Google's December Security Update",
                    "description": "Here comes the Android December security update. If you’re the proud owner of a Pixel phone, it’s time to check and see if you can grab the latest fixes, patches, and features for your device. But remember: Google is rolling the update out, as always, so it’s…",
                    "url": "https://lifehacker.com/get-live-captions-and-pixel-themes-with-googles-decembe-1840179514",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/xtk4n5mpous2vqfhegwt.jpg",
                    "publishedAt": "2019-12-04T15:00:00Z",
                    "content": "Here comes the Android December security update. If youre the proud owner of a Pixel phone, its time to check and see if you can grab the latest fixes, patches, and features for your device. But remember: Google is rolling the update out, as always, so its po… [+1821 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "David Murphy",
                    "title": "How to Find Free Movies and TV Shows on Plex",
                    "description": "Plex launched a new, free, ad-supported streaming service for movies and TV shows today, and here’s the kicker: There’s no way to not view ads. Even if you’re a Plex Pass subscriber, Plex’s premium offering, you’re still going to see ads when you watch anythi…",
                    "url": "https://lifehacker.com/how-to-find-free-movies-and-tv-shows-on-plex-1840200145",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/lpztlodxijgjusv4dz5v.png",
                    "publishedAt": "2019-12-04T20:00:00Z",
                    "content": "Plex launched a new, free, ad-supported streaming service for movies and TV shows today, and heres the kicker: Theres no way to not view ads. Even if youre a Plex Pass subscriber, Plexs premium offering, youre still going to see ads when you watch anything on… [+1712 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Nicole Dieker on Two Cents, shared by Nicole Dieker to Lifehacker",
                    "title": "Set Up Balance Transfer Autopayments to Pay Off Your Debt Before the 0% Intro APR Expires",
                    "description": "If you’ve got a lot of credit card debt and the monthly interest charges are adding up, a balance transfer credit card can be an excellent way of paying off that debt without paying interest. In exchange for a small balance transfer fee (usually 3% to 5% of y…",
                    "url": "https://twocents.lifehacker.com/set-up-balance-transfer-autopayments-to-pay-off-your-de-1840202224",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/glleoutkzke8hoyycy16.jpg",
                    "publishedAt": "2019-12-04T17:30:00Z",
                    "content": "If youve got a lot of credit card debt and the monthly interest charges are adding up, a balance transfer credit card can be an excellent way of paying off that debt without paying interest. In exchange for a small balance transfer fee (usually 3% to 5% of yo… [+1847 chars]"
                }
            ]
        }
    }
}