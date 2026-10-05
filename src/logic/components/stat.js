export function stat(label, icon, value, description) {
    return `
        <div class="hero__stat">
            <dt class="hero__stat-label">${label}</dt>
            <div class="hero__stat-icon">
                <img
                    src=${icon}
                    alt="">
            </div>
            <dd class="hero__stat-value">${value}</dd>
            <dd class="hero__stat-description">${description}</dd>
        </div>
    `
}
