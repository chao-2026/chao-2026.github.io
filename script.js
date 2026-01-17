// CHA◎ Game Characters Data
const characters = [
    {
        id: 1,
        name: "姜子牙 Jiang Ziya",
        title: "预言贤者 Prophet Sage",
        faction: "heaven",
        hexagram: "䷀ (乾 - 天)",
        skill: "天命之眼 - 夜，查探一名玩家的阵营。 | Detect a player's faction at night.",
        description: "白髮智者，受天命下凡，帶領闡教弟子平息亂世。"
    },
    {
        id: 2,
        name: "杨戬 Yang Jian",
        title: "天界战神 Celestial Warrior",
        faction: "heaven",
        hexagram: "䷓ (观 - 风地)",
        skill: "七十二变 - 夜，二选一：守护一玩家或追踪一玩家。 | At night, choose: Guard a player or Track a player.",
        description: "擁有天眼與七十二般變化，闡教最強戰力之一。"
    },
    {
        id: 3,
        name: "雷震子 Lei Zhenzi",
        title: "风雷翼使 Storm Winged Envoy",
        faction: "heaven",
        hexagram: "䷟ (恒 - 雷风)",
        skill: "风雷俯冲 - 夜，选择一名玩家。若其当夜被施加魅惑、眩目、禁言，则解除之。 | Choose a player at night. Remove Charm, Dazzle, or Silence on them.",
        description: "背生風雷雙翼，速度極快，擅長解除負面狀態。"
    },
    {
        id: 4,
        name: "纣王 King Zhou",
        title: "暴虐君主 Tyrant King",
        faction: "mortal",
        hexagram: "䷒ (临 - 地泽)",
        skill: "帝王威严 - 白天投票时，你的票计为2票。 | Your vote counts as 2 votes during the day.",
        description: "商朝末代君主，受妲己迷惑，統治腐敗暴虐。"
    },
    {
        id: 5,
        name: "邓婵玉 Deng Chanyu",
        title: "五光飞石 Five-Light Stone",
        faction: "mortal",
        hexagram: "䷐ (随 - 泽雷)",
        skill: "五光飞石 - 夜，对一玩家掷石，使其次日票数-1。 | Hit a player: Dazzle (Their vote -1 next day).",
        description: "原為商朝女將，後看清昏君真相，決心反抗。"
    },
    {
        id: 6,
        name: "伯邑考 Bo Yikao",
        title: "高尚祭品 Noble Sacrifice",
        faction: "mortal",
        hexagram: "䷆ (师 - 地水)",
        skill: "舍身成仁 - 你被淘汰时，可带走一名玩家。 | When eliminated, take another player with you.",
        description: "善良的王子，為救父親遭害，其犧牲點燃抗爭之心。"
    },
    {
        id: 7,
        name: "妲己 Daji",
        title: "魅惑妖后 Enchantress Queen",
        faction: "chasm",
        hexagram: "䷫ (姤 - 天风)",
        skill: "狐妖魅惑 - 可魅惑一玩家致死。 | Lure a player to die. (Charm is a night attack skill)",
        description: "九尾狐妖化身美女入宮，迷惑紂王，推動亂世。"
    },
    {
        id: 8,
        name: "通天教主 Lord Tongtian",
        title: "阵法宗师 Array Master",
        faction: "chasm",
        hexagram: "䷋ (否 - 天地)",
        skill: "诛仙剑阵 - 整局一次，夜，杀一玩家，当夜所有阐教技能失效。 | Once per game, kill at night. All Order skills fail that night.",
        description: "截教之首，佈下「誅仙劍陣」，與闡教展開最終仙術大戰。"
    },
    {
        id: 9,
        name: "申公豹 Shen Gongbao",
        title: "混乱煽动者 Chaos Instigator",
        faction: "chasm",
        hexagram: "䷹ (兑 - 泽)",
        skill: "道友请留步 - 开局时，选择一名玩家，其首夜技能无效，且你知晓其角色名。 | At start, choose a player. Their first night skill fails, and you learn their role.",
        description: "善於挑撥離間，暗中結集力量對抗天命。"
    },
    {
        id: 10,
        name: "闻仲 Wen Zhong",
        title: "铁腕统帅 Iron-willed Commander",
        faction: "chasm",
        hexagram: "䷢ (晋 - 火地)",
        skill: "雷霆指挥 - 夜，控制一玩家，其次日首轮投票须与你一致。 | Control a player. They must follow your first vote next day.",
        description: "截教大將，與申公豹聯手，相信規則是用來打破的。"
    },
    {
        id: 11,
        name: "哪吒 Nezha",
        title: "莲花化身 Lotus Incarnate",
        faction: "heaven",
        hexagram: "䷲ (震 - 雷)",
        skill: "乾坤圈 - 夜，攻击一玩家。若其为你追踪过的目标，此攻击无法被守护。 | Attack a player. Unblockable if you have Tracked them before.",
        description: "蓮花化身的少年英雄，勇猛衝動，專注對抗黑暗陣營。"
    },
    {
        id: 12,
        name: "比干 Bigan",
        title: "七窍忠臣 Loyal Minister",
        faction: "mortal",
        hexagram: "䷗ (复 - 地雷)",
        skill: "玲珑之心 - 你永久免疫「魅惑」。首次被击杀时，不会死亡。 | Immune to Charm. Survive the first kill attempt.",
        description: "擁有「七竅玲瓏心」的忠臣，因直諫被挖心而死。"
    },
    {
        id: 13,
        name: "女娲娘娘 Nüwa",
        title: "创世母神 Primordial Goddess",
        faction: "neutral",
        hexagram: "䷁ (坤 - 地)",
        skill: "补天造人 - 整局一次，复活一名已淘汰玩家。 | Once per game, resurrect an eliminated player.",
        description: "創世神，超越陣營紛爭，關心世界平衡與存續。"
    },
    {
        id: 14,
        name: "西王母 Queen Mother of the West",
        title: "瑶池仙首 Queen of Immortals",
        faction: "neutral",
        hexagram: "䷊ (泰 - 地天)",
        skill: "瑶池仙令 - 夜，指定一玩家，其当夜免疫首个负面技能。 | At night, protect a player from first negative skill.",
        description: "長生與天罰之主，遊離於三大陣營之外。"
    }
];

// DOM Elements
const charactersGrid = document.querySelector('.characters-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const characterModal = document.querySelector('.character-detail-modal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initialize characters
function initCharacters() {
    charactersGrid.innerHTML = '';
    
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = `character-card ${character.faction}`;
        characterCard.dataset.id = character.id;
        
        // Determine faction class and text
        let factionClass = '';
        let factionText = '';
        switch(character.faction) {
            case 'heaven':
                factionClass = 'faction-heaven';
                factionText = 'Heaven';
                break;
            case 'chasm':
                factionClass = 'faction-chasm';
                factionText = 'Chasm';
                break;
            case 'mortal':
                factionClass = 'faction-mortal';
                factionText = 'Mortal';
                break;
            case 'neutral':
                factionClass = 'faction-neutral';
                factionText = 'Neutral';
                break;
        }
        
        characterCard.innerHTML = `
            <div class="character-header">
                <div class="character-name">${character.name}</div>
                <div class="character-faction ${factionClass}">${factionText}</div>
            </div>
            <div class="character-body">
                <div class="character-hexagram">${character.hexagram}</div>
                <div class="character-title">${character.title}</div>
            </div>
        `;
        
        characterCard.addEventListener('click', () => showCharacterDetail(character.id));
        charactersGrid.appendChild(characterCard);
    });
}

// Filter characters
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        // Show/hide characters based on filter
        document.querySelectorAll('.character-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Show character detail modal
function showCharacterDetail(characterId) {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;
    
    // Determine faction class and text
    let factionClass = '';
    let factionText = '';
    let factionDescription = '';
    
    switch(character.faction) {
        case 'heaven':
            factionClass = 'faction-heaven';
            factionText = 'Heaven (Order)';
            factionDescription = '闡教 - 遵從天命，欲封印邪惡';
            break;
        case 'chasm':
            factionClass = 'faction-chasm';
            factionText = 'Chasm (Chaos)';
            factionDescription = '截教 - 反抗天條，追求絕對自由';
            break;
        case 'mortal':
            factionClass = 'faction-mortal';
            factionText = 'Mortal (Anarchy)';
            factionDescription = '凡人 - 在動盪中掙扎求生，尋求自己的道路';
            break;
        case 'neutral':
            factionClass = 'faction-neutral';
            factionText = 'Neutral (Balance)';
            factionDescription = '仙魔 - 超越陣營紛爭，維持遊戲平衡';
            break;
    }
    
    modalBody.innerHTML = `
        <div class="character-detail">
            <div class="detail-header">
                <h2>${character.name}</h2>
                <div class="detail-faction ${factionClass}">${factionText}</div>
            </div>
            <div class="detail-subtitle">${character.title}</div>
            <div class="detail-hexagram">
                <h3>I Ching Hexagram</h3>
                <div class="hexagram-symbol">${character.hexagram}</div>
                <p class="faction-desc">${factionDescription}</p>
            </div>
            <div class="detail-description">
                <h3>Background Story</h3>
                <p>${character.description}</p>
            </div>
            <div class="detail-gameplay">
                <h3>Gameplay Role</h3>
                <p>This character plays a ${character.faction === 'heaven' ? 'defensive/support' : character.faction === 'chasm' ? 'aggressive/deceptive' : character.faction === 'mortal' ? 'versatile/opportunistic' : 'control/balance'} role in the game. Their hexagram ${character.hexagram.split(' ')[0]} represents their thematic connection to the I Ching philosophy.</p>
            </div>
        </div>
    `;
    
    characterModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    characterModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
characterModal.addEventListener('click', (e) => {
    if (e.target === characterModal) {
        characterModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCharacters();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 26, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
