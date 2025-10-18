class InfoComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['name', 'insta', 'github', 'linkedin', 'img', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || '';
        const insta = this.getAttribute('insta') || '#';
        const github = this.getAttribute('github') || '#';
        const linkedin = this.getAttribute('linkedin') || '';
        const img = this.getAttribute('img') || '';
        const description = this.getAttribute('description') || 'Estudante de sistemas de computação na UESPI de parnaíba.';

        // Determinar se é organizador ou participante baseado no contexto
        const isOrganizer = this.closest('.organizers-container') !== null;
        const componentClass = isOrganizer ? 'organizer' : 'participant';

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');
                :host {
                    display: block;
                }

                .info-card {
                    border: 3px solid var(--pixel-cyan, #06b6d4);
                    border-radius: 0;
                    padding: 1.5rem;
                    cursor: pointer;
                    background: linear-gradient(135deg, var(--pixel-white, #f8fafc) 0%, var(--pixel-light-gray, #e5e7eb) 100%);
                    box-shadow: 
                        4px 4px 0px var(--pixel-black, #0d1117),
                        8px 8px 0px var(--pixel-purple, #8b5cf6);
                    transition: all 0.2s ease;
                    position: relative;
                    color: var(--pixel-black, #0d1117);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    min-height: 280px;
                    justify-content: space-between;
                    font-family: 'Press Start 2P', monospace;
                }

                .info-card:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: 
                        6px 6px 0px var(--pixel-black, #0d1117),
                        12px 12px 0px var(--pixel-purple, #8b5cf6);
                    border-color: var(--pixel-yellow, #f59e0b);
                }

                .info-card::before {
                    content: '';
                    position: absolute;
                    top: -3px;
                    left: -3px;
                    right: -3px;
                    bottom: -3px;
                    background: linear-gradient(45deg, var(--pixel-cyan, #06b6d4), var(--pixel-pink, #ec4899), var(--pixel-yellow, #f59e0b), var(--pixel-green, #10b981));
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .info-card:hover::before {
                    opacity: 0.3;
                }

                .profile-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 0;
                    border: 2px solid var(--pixel-black, #0d1117);
                    image-rendering: pixelated;
                    image-rendering: -moz-crisp-edges;
                    image-rendering: crisp-edges;
                    box-shadow: 2px 2px 0px var(--pixel-purple, #8b5cf6);
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                    margin-bottom: 8px;
                    object-fit: cover;
                }

                .profile-img:hover {
                    transform: scale(1.1);
                    box-shadow: 3px 3px 0px var(--pixel-purple, #8b5cf6), 6px 6px 0px var(--pixel-black, #0d1117);
                }

                .name {
                    font-size: 14px;
                    color: var(--pixel-black, #0d1117);
                    text-shadow: 1px 1px 0px var(--pixel-gray, #6b7280);
                    margin: 12px 0 8px 0;
                    flex-shrink: 0;
                }

                .description {
                    font-size: 10px;
                    color: var(--pixel-gray, #6b7280);
                    margin: 8px 0 16px 0;
                    line-height: 1.4;
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .social-links {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    margin-top: auto;
                    flex-shrink: 0;
                }

                .social-link {
                    text-decoration: none;
                    color: var(--pixel-black, #0d1117);
                    font-size: 16px;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                }

                .social-link i {
                    font-size: 18px;
                    font-family: 'bootstrap-icons';
                }

                /* Removed fallback that interfered with Bootstrap Icons */
                /* .social-link i::before { content: attr(data-icon); font-family: Arial, sans-serif; } */
                /* .bi-instagram::before { content: "📷"; } */
                /* .bi-github::before { content: "🐙"; } */
                /* .bi-linkedin::before { content: "💼"; } */

                .social-link:hover {
                    color: var(--pixel-cyan, #06b6d4);
                    transform: scale(1.2);
                    text-shadow: 1px 1px 0px var(--pixel-black, #0d1117);
                }

                .placeholder-img {
                    width: 80px;
                    height: 80px;
                    border: 2px solid var(--pixel-black, #0d1117);
                    background: linear-gradient(135deg, var(--pixel-purple, #8b5cf6), var(--pixel-blue, #3b82f6));
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 8px;
                    flex-shrink: 0;
                    border-radius: 0;
                    box-shadow: 2px 2px 0px var(--pixel-black, #0d1117);
                    position: relative;
                    overflow: hidden;
                }

                .placeholder-icon {
                    font-size: 24px;
                    color: var(--pixel-white, #f8fafc);
                    margin-bottom: 2px;
                }

                .placeholder-img::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
                    animation: shimmer 2s infinite;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }
            </style>
            
            <div class="info-card">
                ${img && img !== '' ? 
                    `<img src="${img}" alt="Foto de perfil - ${name}" class="profile-img">` : 
                    `<div class="placeholder-img">
                        <div class="placeholder-icon">
                            <i class="bi bi-person-fill"></i>
                        </div>
                    </div>`
                }
                <h4 class="name">${name}</h4>
                <p class="description">${description}</p>
                <div class="social-links">
                    ${insta && insta !== '#' ? `<a href="${insta}" class="social-link" target="_blank"><i class="bi bi-instagram"></i></a>` : ''}
                    ${github && github !== '#' ? `<a href="${github}" class="social-link" target="_blank"><i class="bi bi-github"></i></a>` : ''}
                    ${linkedin && linkedin !== '' ? `<a href="${linkedin}" class="social-link" target="_blank"><i class="bi bi-linkedin"></i></a>` : ''}
                </div>
            </div>
        `;
    }
}

// Registrar o web component
customElements.define('info-card', InfoComponent);
