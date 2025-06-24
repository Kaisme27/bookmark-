// 工具数据
const toolsData = {
    text: [
        {
            name: "ChatGPT",
            description: "A powerful conversational AI developed by OpenAI, supporting various text generation tasks.",
            price: "Free/Paid",
            url: "https://chat.openai.com",
            icon: "fa-solid fa-brain"
        },
        {
            name: "DeepSeek",
            description: "DeepSeek AI assistant providing intelligent conversation and text generation services.",
            price: "Free",
            url: "https://www.deepseek.com",
            icon: "fa-solid fa-lightbulb"
        },
        {
            name: "Grammarly",
            description: "An intelligent writing assistant that checks grammar, spelling, and writing style.",
            price: "Free/Paid",
            url: "https://www.grammarly.com",
            icon: "fa-solid fa-spell-check"
        },
        {
            name: "ProWritingAid",
            description: "A professional writing analysis tool offering detailed writing suggestions.",
            price: "Paid",
            url: "https://prowritingaid.com",
            icon: "fa-solid fa-robot"
        },
        {
            name: "QuillBot",
            description: "AI-powered tool for text rewriting and paraphrasing.",
            price: "Free/Paid",
            url: "https://quillbot.com",
            icon: "fa-solid fa-pen-fancy"
        },
        {
            name: "TextRise",
            description: "Intelligent text generation and optimization platform.",
            price: "Paid",
            url: "https://textrise.com/",
            icon: "fa-solid fa-chart-line"
        },
        {
            name: "Scribbr",
            description: "Academic writing and paper checking tool.",
            price: "Paid",
            url: "https://www.scribbr.com",
            icon: "fa-solid fa-book"
        },
        {
            name: "Anyword",
            description: "AI marketing copy generation tool.",
            price: "Paid",
            url: "https://anyword.com",
            icon: "fa-solid fa-bullhorn"
        },
        {
            name: "RejoinerAI",
            description: "Intelligent email marketing copy generation.",
            price: "Paid",
            url: "https://rejoiner.com/ai/",
            icon: "fa-solid fa-envelope-open-text"
        },
        {
            name: "Writesonic",
            description: "AI content creation platform supporting various types of copy.",
            price: "Paid",
            url: "https://writesonic.com",
            icon: "fa-solid fa-magic"
        },
        {
            name: "Copy.ai",
            description: "AI-powered marketing copy generation tool.",
            price: "Free/Paid",
            url: "https://www.copy.ai"
        },
        {
            name: "Articoolo",
            description: "AI article generation and content creation tool.",
            price: "Paid",
            url: "https://articoolo.com"
        },
        {
            name: "Wordtune",
            description: "Intelligent text rewriting and optimization tool.",
            price: "Free/Paid",
            url: "https://www.wordtune.com"
        },
        {
            name: "Copysmith",
            description: "AI marketing copy and content generation platform.",
            price: "Paid",
            url: "https://copysmith.ai"
        },
        {
            name: "Paraphraser.io",
            description: "Online text rewriting and synonym replacement tool.",
            price: "Free",
            url: "https://paraphraser.io"
        },
        {
            name: "Contentrewriter.com",
            description: "Content rewriting and optimization tool.",
            price: "Free",
            url: "https://contentrewriter.com"
        },
        {
            name: "Article Forge",
            description: "AI article generation tool supporting multiple topics.",
            price: "Paid",
            url: "https://www.articleforge.com"
        },
        {
            name: "Summarize.co",
            description: "Intelligent text summarization tool.",
            price: "Free",
            url: "https://summarize.co"
        },
        {
            name: "TextAlley",
            description: "A collection of text editing and optimization tools.",
            price: "Free",
            url: "https://textalley.com/"
        },
        {
            name: "RewriteGuru",
            description: "Intelligent text rewriting and optimization expert.",
            price: "Free",
            url: "https://rewriteguru.com/"
        }
    ],
    image: [
        {
            name: "MidJourney",
            description: "AI image generation tool for creating high-quality artworks.",
            price: "Paid",
            url: "https://www.midjourney.com",
            icon: "fa-solid fa-image"
        },
        {
            name: "Stable Diffusion",
            description: "Open-source AI image generation model.",
            price: "Free",
            url: "https://stability.ai",
            icon: "fa-solid fa-palette"
        },
        {
            name: "DALL-E mini",
            description: "OpenAI's image generation AI, now known as Craiyon.",
            price: "Free",
            url: "https://www.craiyon.com"
        },
        {
            name: "Runway ML Create",
            description: "AI creative tool platform supporting image and video generation.",
            price: "Paid",
            url: "https://runwayml.com"
        },
        {
            name: "Dreamscope",
            description: "AI art style transfer tool.",
            price: "Free",
            url: "https://dreamscopeapp.com"
        },
        {
            name: "NightCafe Creator",
            description: "AI art creation platform.",
            price: "Free/Paid",
            url: "https://creator.nightcafe.studio"
        },
        {
            name: "Pixray",
            description: "AI image generation and editing tool.",
            price: "Free",
            url: "https://pixray.gob.io"
        },
        {
            name: "Artbreeder",
            description: "AI art creation and mixing tool.",
            price: "Free/Paid",
            url: "https://www.artbreeder.com"
        },
        {
            name: "Lexica.art",
            description: "AI art search engine and creation platform.",
            price: "Free",
            url: "https://lexica.art"
        },
        {
            name: "PromptBase",
            description: "AI prompt trading platform.",
            price: "Paid",
            url: "https://promptbase.com"
        },
        {
            name: "Artisto",
            description: "AI art style transfer application.",
            price: "Free",
            url: "https://artisto.ai"
        },
        {
            name: "WaifuDiffusion",
            description: "AI anime-style image generation.",
            price: "Free",
            url: "https://waifudiffusion.art/"
        },
        {
            name: "DeepArt",
            description: "AI art style transfer tool.",
            price: "Paid",
            url: "https://deepart.io"
        },
        {
            name: "Prisma",
            description: "AI art filter application.",
            price: "Free/Paid",
            url: "https://prisma-ai.com"
        },
        {
            name: "Canva Design School",
            description: "Design learning and AI tool integration.",
            price: "Free",
            url: "https://www.canva.com"
        },
        {
            name: "Adobe Spark Post",
            description: "Adobe's AI design tool.",
            price: "Free/Paid",
            url: "https://spark.adobe.com"
        },
        {
            name: "PicMonkey",
            description: "Online image editing and design tool.",
            price: "Paid",
            url: "https://www.picmonkey.com"
        },
        {
            name: "Paint.NET",
            description: "Free image editing software.",
            price: "Free",
            url: "https://www.getpaint.net"
        },
        {
            name: "Krita",
            description: "Free digital painting software.",
            price: "Free",
            url: "https://krita.org"
        },
        {
            name: "GIMP",
            description: "Free image editing software.",
            price: "Free",
            url: "https://www.gimp.org"
        }
    ],
    video: [
        {
            name: "Runway ML Video",
            description: "AI video generation and editing tool.",
            price: "Paid",
            url: "https://runwayml.com",
            icon: "fa-solid fa-video"
        },
        {
            name: "Sora Studio",
            description: "OpenAI's AI video generation tool.",
            price: "Paid",
            url: "https://openai.com/sora"
        },
        {
            name: "Lumen5",
            description: "AI video creation platform.",
            price: "Free/Paid",
            url: "https://lumen5.com"
        },
        {
            name: "Animoto",
            description: "Online video creation tool.",
            price: "Paid",
            url: "https://animoto.com"
        },
        {
            name: "Kapwing",
            description: "Online video editing platform.",
            price: "Free/Paid",
            url: "https://www.kapwing.com"
        },
        {
            name: "Renderforest",
            description: "Online video creation and animation tool.",
            price: "Free/Paid",
            url: "https://www.renderforest.com"
        },
        {
            name: "Veed.io",
            description: "Online video editing tool.",
            price: "Free/Paid",
            url: "https://www.veed.io"
        },
        {
            name: "Lightworks",
            description: "Professional video editing software.",
            price: "Free/Paid",
            url: "https://www.lwks.com"
        },
        {
            name: "HitFilm Express",
            description: "Free video editing and effects software.",
            price: "Free",
            url: "https://fxhome.com"
        },
        {
            name: "DaVinci Resolve",
            description: "Professional video editing software.",
            price: "Free/Paid",
            url: "https://www.blackmagicdesign.com"
        },
        {
            name: "Blender Video Editing",
            description: "Video editing feature of the open-source 3D software.",
            price: "Free",
            url: "https://www.blender.org"
        },
        {
            name: "iMovie",
            description: "Apple device video editing application.",
            price: "Free",
            url: "https://www.apple.com/imovie/"
        },
        {
            name: "Filmora",
            description: "User-friendly video editing software.",
            price: "Paid",
            url: "https://filmora.wondershare.com"
        },
        {
            name: "Shotcut",
            description: "Free open-source video editor.",
            price: "Free",
            url: "https://shotcut.org"
        },
        {
            name: "Pinnacle Studio",
            description: "Professional video editing software.",
            price: "Paid",
            url: "https://www.pinnaclesys.com"
        },
        {
            name: "Avidemux",
            description: "Free video editing and conversion tool.",
            price: "Free",
            url: "http://avidemux.sourceforge.net"
        },
        {
            name: "Openshot Video Editor",
            description: "Free open-source video editor.",
            price: "Free",
            url: "https://www.openshot.org"
        },
        {
            name: "Wax",
            description: "Free video editing software.",
            price: "Free",
            url: "https://www.debugmode.com/wax/"
        },
        {
            name: "Magisto",
            description: "AI video creation tool.",
            price: "Paid",
            url: "https://www.magisto.com"
        }
    ],
    search: [
        {
            name: "Perplexity.ai",
            description: "AI-powered search and research assistant.",
            price: "Free/Paid",
            url: "https://www.perplexity.ai",
            icon: "fa-solid fa-search"
        },
        {
            name: "Wolfram Alpha",
            description: "Computational knowledge engine.",
            price: "Paid",
            url: "https://www.wolframalpha.com"
        },
        {
            name: "Google Scholar",
            description: "Academic literature search tool.",
            price: "Free",
            url: "https://scholar.google.com"
        },
        {
            name: "Bing Visual Search",
            description: "Microsoft's visual search tool.",
            price: "Free",
            url: "https://www.bing.com/visualsearch"
        },
        {
            name: "Qwen",
            description: "Alibaba Cloud's AI assistant.",
            price: "Free",
            url: "https://qwen.aliyun.com"
        },
        {
            name: "Claude",
            description: "Anthropic's AI assistant.",
            price: "Paid",
            url: "https://claude.ai"
        },
        {
            name: "Anthropic",
            description: "AI research and development company.",
            price: "Paid",
            url: "https://www.anthropic.com"
        },
        {
            name: "OpenAI Codex",
            description: "AI code generation tool.",
            price: "Paid",
            url: "https://openai.com"
        },
        {
            name: "Bard by Google",
            description: "Google's AI conversational assistant.",
            price: "Free",
            url: "https://bard.google.com"
        },
        {
            name: "DuckDuckGo",
            description: "Privacy-focused search engine.",
            price: "Free",
            url: "https://duckduckgo.com"
        },
        {
            name: "Startpage",
            description: "Privacy-protecting search engine.",
            price: "Free",
            url: "https://www.startpage.com"
        },
        {
            name: "Swisscows",
            description: "Swiss search engine.",
            price: "Free",
            url: "https://swisscows.com"
        },
        {
            name: "Baidu Baike",
            description: "Baidu Baike knowledge base.",
            price: "Free",
            url: "https://baike.baidu.com"
        },
        {
            name: "Yahoo Answers",
            description: "Yahoo Q&A platform.",
            price: "Free",
            url: "https://answers.yahoo.com/"
        },
        {
            name: "Yandex Zen",
            description: "Russian search engine's recommendation platform.",
            price: "Free",
            url: "https://zen.yandex.com"
        },
        {
            name: "Reddit AskScience",
            description: "Reddit science Q&A community.",
            price: "Free",
            url: "https://www.reddit.com/r/askscience"
        },
        {
            name: "Stack Overflow",
            description: "Programmer Q&A community.",
            price: "Free",
            url: "https://stackoverflow.com"
        },
        {
            name: "Quora",
            description: "Question and answer community platform.",
            price: "Free",
            url: "https://www.quora.com"
        },
        {
            name: "Medium",
            description: "Content creation and sharing platform.",
            price: "Free/Paid",
            url: "https://medium.com"
        },
        {
            name: "LinkedIn Learning",
            description: "Professional learning platform.",
            price: "Paid",
            url: "https://www.linkedin.com/learning"
        }
    ],
    automation: [
        {
            name: "Zapier AI",
            description: "AI-powered workflow automation platform.",
            price: "Paid",
            url: "https://zapier.com",
            icon: "fa-solid fa-cogs"
        },
        {
            name: "Integromat",
            description: "Visual workflow automation tool.",
            price: "Paid",
            url: "https://www.integromat.com"
        },
        {
            name: "Microsoft Power Automate",
            description: "Microsoft's workflow automation platform.",
            price: "Paid",
            url: "https://powerautomate.microsoft.com"
        },
        {
            name: "IFTTT",
            description: "If This Then That automation service.",
            price: "Free/Paid",
            url: "https://ifttt.com"
        },
        {
            name: "Make",
            description: "Visual workflow automation platform.",
            price: "Paid",
            url: "https://www.make.com"
        },
        {
            name: "Workato",
            description: "Enterprise-level workflow automation platform.",
            price: "Paid",
            url: "https://www.workato.com"
        },
        {
            name: "Zoho Flow",
            description: "Zoho workflow automation tool.",
            price: "Paid",
            url: "https://www.zoho.com/flow"
        },
        {
            name: "Airtable Automations",
            description: "Airtable automation feature.",
            price: "Paid",
            url: "https://airtable.com"
        },
        {
            name: "AutopilotHQ",
            description: "Marketing automation platform.",
            price: "Paid",
            url: "https://autopilothq.com"
        },
        {
            name: "UiPath Go!",
            description: "RPA automation tool.",
            price: "Paid",
            url: "https://www.uipath.com"
        },
        {
            name: "ProcessMaker Community Edition",
            description: "Open source workflow management platform.",
            price: "Free",
            url: "https://www.processmaker.com"
        },
        {
            name: "Robocorp Cloud Free Tier",
            description: "RPA automation cloud platform free tier.",
            price: "Free",
            url: "https://robocorp.com"
        },
        {
            name: "Blue Prism Community Edition",
            description: "Blue Prism RPA community edition.",
            price: "Free",
            url: "https://www.blueprism.com"
        },
        {
            name: "Oracle Process Cloud Service",
            description: "Oracle process cloud service.",
            price: "Paid",
            url: "https://www.oracle.com"
        },
        {
            name: "Celigo Integrator",
            description: "Cloud integration platform.",
            price: "Paid",
            url: "https://www.celigo.com"
        },
        {
            name: "Skyvia",
            description: "Data integration and synchronization platform.",
            price: "Paid",
            url: "https://skyvia.com"
        },
        {
            name: "Jitterbit Harmony",
            description: "Enterprise integration platform.",
            price: "Paid",
            url: "https://www.jitterbit.com"
        },
        {
            name: "Dell Boomi AtomSphere",
            description: "Cloud integration platform.",
            price: "Paid",
            url: "https://boomi.com"
        }
    ],
    communication: [
        {
            name: "Uhmegle",
            description: "Random video chat platform.",
            price: "Free",
            url: "https://uhmegle.com/"
        },
        {
            name: "Discord",
            description: "Gaming and community chat platform.",
            price: "Free/Paid",
            url: "https://discord.com",
            icon: "fa-brands fa-discord"
        },
        {
            name: "Slack",
            description: "Team collaboration and communication platform.",
            price: "Free/Paid",
            url: "https://slack.com"
        },
        {
            name: "Microsoft Teams",
            description: "Microsoft's team collaboration platform.",
            price: "Free/Paid",
            url: "https://teams.microsoft.com"
        },
        {
            name: "Zoom",
            description: "Video conferencing and online meeting platform.",
            price: "Free/Paid",
            url: "https://zoom.us"
        },
        {
            name: "Google Meet",
            description: "Google's video conferencing tool.",
            price: "Free/Paid",
            url: "https://meet.google.com"
        },
        {
            name: "Cisco Webex",
            description: "Cisco video conferencing platform.",
            price: "Paid",
            url: "https://www.webex.com"
        },
        {
            name: "Skype",
            description: "Microsoft's communication platform.",
            price: "Free/Paid",
            url: "https://www.skype.com"
        },
        {
            name: "WhatsApp Business API",
            description: "WhatsApp business API.",
            price: "Paid",
            url: "https://business.whatsapp.com"
        },
        {
            name: "Telegram",
            description: "Secure messaging application.",
            price: "Free",
            url: "https://telegram.org"
        },
        {
            name: "Signal",
            description: "Privacy-focused messaging application.",
            price: "Free",
            url: "https://signal.org"
        },
        {
            name: "Rocket.Chat",
            description: "Open source team collaboration platform.",
            price: "Free/Paid",
            url: "https://rocket.chat"
        },
        {
            name: "Mattermost",
            description: "Open source team collaboration tool.",
            price: "Free/Paid",
            url: "https://mattermost.com"
        },
        {
            name: "Element",
            description: "Matrix protocol client.",
            price: "Free",
            url: "https://element.io"
        },
        {
            name: "Wire",
            description: "Secure communication platform.",
            price: "Free/Paid",
            url: "https://wire.com"
        },
        {
            name: "RingCentral Meetings",
            description: "RingCentral video conferencing tool.",
            price: "Paid",
            url: "https://www.ringcentral.com"
        },
        {
            name: "BlueJeans",
            description: "Verizon video conferencing platform.",
            price: "Paid",
            url: "https://www.bluejeans.com"
        },
        {
            name: "Fuze",
            description: "Unified communication platform.",
            price: "Paid",
            url: "https://www.fuze.com"
        },
        {
            name: "Join.me",
            description: "Online meeting and screen sharing tool.",
            price: "Paid",
            url: "https://www.join.me"
        },
        {
            name: "Owl Video Conferencing",
            description: "Smart video conferencing device.",
            price: "Paid",
            url: "https://owllabs.com"
        }
    ]
};

// 分类标题映射
const categoryTitles = {
    text: "Text Creation and Editing",
    image: "Image Creation and Editing",
    video: "Video Creation and Editing",
    search: "AI Search and Research Assistant",
    automation: "AI Workflow Automation",
    communication: "AI Communication and Collaboration"
};

// DOM元素
// const modal = document.getElementById('toolsModal');
// const modalTitle = document.getElementById('modalTitle');
// const toolsGrid = document.getElementById('toolsGrid');
// const closeBtn = document.querySelector('.close');
const categoryCards = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');
const backToTopBtn = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-link');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeSmoothScrolling();
    initializeBackToTop();
    initializeSearch();
    renderAllCategories();

    // 搜索按钮和输入框事件绑定
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // 关闭搜索modal事件绑定
    const searchModalClose = document.getElementById('searchModalClose');
    const searchResultModal = document.getElementById('searchResultModal');
    if (searchModalClose && searchResultModal) {
        searchModalClose.onclick = function(e) {
            e.stopPropagation();
            searchResultModal.classList.remove('show');
            searchResultModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
        searchResultModal.onclick = function(e) {
            if (e.target === searchResultModal) {
                searchResultModal.classList.remove('show');
                searchResultModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }
});

// 事件监听器初始化
function initializeEventListeners() {
    // 分类卡片点击事件
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            // openToolsModal(category); // 注释掉模态框相关
        });
    });

    // 模态框关闭事件
    // closeBtn.addEventListener('click', closeModal);
    // modal.addEventListener('click', function(e) {
    //     if (e.target === modal) {
    //         closeModal();
    //     }
    // });

    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                updateActiveNavLink(this);
            }
        });
    });

    // 页脚分类链接点击事件
    document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            // openToolsModal(category); // 注释掉模态框相关
        });
    });
}

// 打开工具模态框
// function openToolsModal(category) { ... } // 注释掉整个函数

// 创建工具卡片
// function createToolCard(tool) { ... } // 注释掉整个函数

// 关闭模态框
// function closeModal() { ... } // 注释掉整个函数

// 搜索功能
function initializeSearch() {
    // 搜索功能初始化
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (!searchTerm) return;
    const matchedTools = [];
    Object.keys(toolsData).forEach(category => {
        toolsData[category].forEach(tool => {
            if (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm)
            ) {
                matchedTools.push(tool);
            }
        });
    });
    if (matchedTools.length > 0) {
        showSearchResultModal(matchedTools);
    } else {
        alert('No related tools found');
    }
}

function showSearchResultModal(tools) {
    const modal = document.getElementById('searchResultModal');
    const cardContainer = document.getElementById('searchResultCard');
    cardContainer.innerHTML = tools.map((tool, idx) => `
        <div class="tool-wall-card" id="searchToolCard${idx}">
            <div class="tool-wall-icon">
                <i class="${tool.icon || 'fa-solid fa-robot'}"></i>
            </div>
            <div class="tool-wall-title">${tool.name}</div>
            <div class="tool-wall-desc">${tool.description || ''}</div>
            <div class="tool-wall-meta">
                <span class="tool-wall-price ${tool.price === 'Free' ? 'free' : tool.price === 'Paid' ? 'paid' : 'mixed'}">${tool.price}</span>
            </div>
        </div>
    `).join('');
    modal.classList.add('show');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // 绑定每个卡片的点击事件
    tools.forEach((tool, idx) => {
        const card = document.getElementById(`searchToolCard${idx}`);
        if (card) {
            card.onclick = () => {
                window.open(tool.url, '_blank');
            };
        }
    });
}

// 平滑滚动
function initializeSmoothScrolling() {
    // 滚动监听
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 更新导航栏样式
        const navbar = document.querySelector('.navbar');
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // 更新返回顶部按钮
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // 更新活动导航链接
        updateActiveNavLinkOnScroll();
    });
}

// 更新活动导航链接
function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// 返回顶部功能
function initializeBackToTop() {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 移动端导航菜单
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// 添加一些额外的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有卡片
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 添加工具卡片的悬停效果
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.tool-card')) {
        e.target.closest('.tool-card').style.transform = 'translateY(-5px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.tool-card')) {
        e.target.closest('.tool-card').style.transform = 'translateY(0) scale(1)';
    }
});

// 渲染所有分类及工具卡片
function renderAllCategories() {
    const allCategoriesTools = document.querySelector('.all-categories-tools');
    allCategoriesTools.innerHTML = '';
    Object.keys(toolsData).forEach(category => {
        // 分类标题
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'category-block';
        categoryBlock.innerHTML = `
            <h2 class="category-title">${categoryTitles[category]}</h2>
            <div class="tools-wall"></div>
        `;
        // 工具卡片墙
        const toolsWall = categoryBlock.querySelector('.tools-wall');
        toolsData[category].forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-wall-card';
            card.innerHTML = `
                <div class="tool-wall-icon">
                    <i class="${tool.icon || 'fa-solid fa-robot'}"></i>
                </div>
                <div class="tool-wall-title">${tool.name}</div>
                <div class="tool-wall-desc">${tool.description || ''}</div>
                <div class="tool-wall-meta">
                    <span class="tool-wall-price ${tool.price === 'Free' ? 'free' : tool.price === 'Paid' ? 'paid' : 'mixed'}">${tool.price}</span>
                </div>
            `;
            card.onclick = () => window.open(tool.url, '_blank');
            toolsWall.appendChild(card);
        });
        allCategoriesTools.appendChild(categoryBlock);
    });
}

function getCategoryIcon(category) {
    switch (category) {
        case 'text': return '<i class="fas fa-pen-fancy"></i>';
        case 'image': return '<i class="fas fa-palette"></i>';
        case 'video': return '<i class="fas fa-video"></i>';
        case 'search': return '<i class="fas fa-search"></i>';
        case 'automation': return '<i class="fas fa-cogs"></i>';
        case 'communication': return '<i class="fas fa-comments"></i>';
        default: return '';
    }
}

function getCategoryDesc(category) {
    switch (category) {
        case 'text': return 'AI-powered writing assistant to boost content creation efficiency';
        case 'image': return 'AI image generation and editing tools to unleash your creative potential';
        case 'video': return 'AI video creation tools to simplify the video creation process';
        case 'search': return 'Smart search and research tools to quickly get accurate information';
        case 'automation': return 'Automate workflow to improve team collaboration efficiency';
        case 'communication': return 'Smart communication tools to enhance team collaboration experience';
        default: return '';
    }
}

const iconList = [
    "fa-solid fa-brain", "fa-solid fa-lightbulb", "fa-solid fa-spell-check", "fa-solid fa-robot", "fa-solid fa-pen-fancy", "fa-solid fa-chart-line", "fa-solid fa-book", "fa-solid fa-bullhorn", "fa-solid fa-envelope-open-text", "fa-solid fa-magic", "fa-solid fa-image", "fa-solid fa-palette", "fa-solid fa-video", "fa-solid fa-search", "fa-solid fa-cogs", "fa-solid fa-comments", "fa-solid fa-globe", "fa-solid fa-cloud", "fa-solid fa-user-astronaut", "fa-solid fa-rocket", "fa-solid fa-microchip", "fa-solid fa-network-wired", "fa-solid fa-laptop-code", "fa-solid fa-bolt", "fa-solid fa-magnet", "fa-solid fa-paper-plane", "fa-solid fa-headset", "fa-solid fa-link", "fa-solid fa-sitemap", "fa-solid fa-database", "fa-solid fa-shield-alt", "fa-solid fa-bug", "fa-solid fa-bell", "fa-solid fa-tasks", "fa-solid fa-sync", "fa-solid fa-layer-group", "fa-solid fa-cube", "fa-solid fa-key", "fa-solid fa-lock", "fa-solid fa-unlock", "fa-solid fa-user-secret", "fa-solid fa-fingerprint", "fa-solid fa-eye", "fa-solid fa-eye-slash", "fa-solid fa-code", "fa-solid fa-terminal", "fa-solid fa-server", "fa-solid fa-mobile-alt", "fa-solid fa-tablet-alt", "fa-solid fa-desktop", "fa-solid fa-laptop", "fa-solid fa-plug", "fa-solid fa-battery-full", "fa-solid fa-battery-half", "fa-solid fa-battery-empty", "fa-solid fa-sun", "fa-solid fa-moon", "fa-solid fa-star", "fa-solid fa-heart", "fa-solid fa-fire", "fa-solid fa-leaf", "fa-solid fa-tree", "fa-solid fa-water", "fa-solid fa-wind", "fa-solid fa-snowflake", "fa-solid fa-mountain", "fa-solid fa-road", "fa-solid fa-car", "fa-solid fa-bus", "fa-solid fa-train", "fa-solid fa-plane", "fa-solid fa-ship", "fa-solid fa-bicycle", "fa-solid fa-running", "fa-solid fa-swimmer", "fa-solid fa-dumbbell", "fa-solid fa-apple-alt", "fa-solid fa-lemon", "fa-solid fa-seedling", "fa-solid fa-bread-slice", "fa-solid fa-hamburger", "fa-solid fa-pizza-slice", "fa-solid fa-ice-cream", "fa-solid fa-coffee", "fa-solid fa-beer", "fa-solid fa-wine-glass", "fa-solid fa-cocktail", "fa-solid fa-glass-cheers", "fa-solid fa-utensils", "fa-solid fa-blender", "fa-solid fa-mug-hot", "fa-solid fa-birthday-cake", "fa-solid fa-candy-cane", "fa-solid fa-cookie", "fa-solid fa-drumstick-bite", "fa-solid fa-egg", "fa-solid fa-fish", "fa-solid fa-hotdog", "fa-solid fa-pepper-hot", "fa-solid fa-seedling"
];
let iconIdx = 0;
Object.keys(toolsData).forEach(category => {
    toolsData[category].forEach(tool => {
        if (tool.name === "ProWritingAid") {
            tool.icon = "fa-solid fa-robot";
        } else {
            tool.icon = iconList[iconIdx % iconList.length];
            iconIdx++;
        }
    });
}); 