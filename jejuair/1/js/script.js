// ==================== 풀페이지 스크롤 관리 ==================== 
class FullPageScroll {
    constructor() {
        this.currentSection = 0;
        this.totalSections = document.querySelectorAll('.section').length;
        this.isScrolling = false;
        this.scrollDelay = 800; // 스크롤 애니메이션 시간
        this.touchStartY = 0;
        this.touchEndY = 0;
        
        this.init();
    }

        init() {
        this.setupEventListeners();
        this.updateActiveSection();
        this.setupHeaderScroll(); // 헤더 스크롤 기능 추가
    }


    setupEventListeners() {
        // 마우스 휠 스크롤
        window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });
        
        // 터치 스크롤
        window.addEventListener('touchstart', (e) => this.handleTouchStart(e), false);
        window.addEventListener('touchend', (e) => this.handleTouchEnd(e), false);
        
        // 키보드 네비게이션
        window.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // 인디케이터 클릭
        document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSection(index));
        });
    }
        setupHeaderScroll() {
        const header = document.querySelector('.header');
        const headerInner = document.querySelector('.header_inner');

        
        // 초기 로드 시 top-bar 숨김 (header_util이 사라지도록 header에 scrolled 클래스 추가)
        if (this.currentSection > 0) {
            header.classList.add('scrolled');
            header.classList.add('transparent');
            headerInner.classList.add('transparent');

        }

        // 섹션 이동 시 top-bar 숨김/표시
        window.addEventListener('sectionChange', (e) => {
            if (e.detail.index > 0) {
                header.classList.add('scrolled');
                header.classList.add('transparent');
                headerInner.classList.add('transparent');
            } else {
                header.classList.remove('scrolled');
                header.classList.remove('transparent');
                headerInner.classList.remove('transparent');
            }
        });
    }


    handleWheel(e) {
        if (this.isScrolling) return;
        
        e.preventDefault();
        
        if (e.deltaY > 0) {
            this.nextSection();
        } else {
            this.previousSection();
        }
    }

    handleTouchStart(e) {
        this.touchStartY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        this.touchEndY = e.changedTouches[0].clientY;
        this.handleSwipe();
    }

    handleSwipe() {
        const difference = this.touchStartY - this.touchEndY;
        const threshold = 50;
        
        if (Math.abs(difference) > threshold) {
            if (difference > 0) {
                this.nextSection();
            } else {
                this.previousSection();
            }
        }
    }

    handleKeyboard(e) {
        if (this.isScrolling) return;
        
        switch(e.key) {
            case 'ArrowDown':
            case ' ':
                e.preventDefault();
                this.nextSection();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.previousSection();
                break;
        }
    }

    nextSection() {
        if (this.currentSection < this.totalSections - 1) {
            this.goToSection(this.currentSection + 1);
        }
    }

    previousSection() {
        if (this.currentSection > 0) {
            this.goToSection(this.currentSection - 1);
        }
    }

    goToSection(index, animate = true) {
        if (index < 0 || index >= this.totalSections || this.isScrolling) return;
        
        this.isScrolling = true;
        
        const direction = index > this.currentSection ? 'down' : 'up';
        const prevIndex = this.currentSection;
        
        this.currentSection = index;
        
        const prevSectionElement = document.querySelectorAll('.section')[prevIndex];
        const currentSectionElement = document.querySelectorAll('.section')[this.currentSection];
        
                if (animate) {
            // 이전 섹션에 'prev' 클래스와 방향 클래스 추가
            if (prevSectionElement) {
                prevSectionElement.classList.add('prev', direction);
            }
            
            // 현재 섹션에 'active' 클래스와 방향 클래스 추가
            if (currentSectionElement) {
                currentSectionElement.classList.add('active', direction);
            }
        } else {
            // 애니메이션이 아닐 경우, 단순히 active 클래스만 추가하여 표시
            if (currentSectionElement) {
                currentSectionElement.classList.add('active');
            }
        }

        
        // 인디케이터 업데이트
        this.updateIndicator();
        
        // URL 업데이트 (선택사항)
        window.history.pushState(null, null, `#section-${this.currentSection}`);

        // 섹션 변경 이벤트 발생
        window.dispatchEvent(new CustomEvent('sectionChange', { detail: { index: this.currentSection } }));
        
        setTimeout(() => {
            this.isScrolling = false;
            
            // 애니메이션 완료 후 클래스 정리
            document.querySelectorAll('.section').forEach((section, idx) => {
                section.classList.remove('prev', 'up', 'down');
                if (idx !== this.currentSection) {
                    section.classList.remove('active');
                }
            });
        }, this.scrollDelay);
    }

    updateActiveSection() {
        // 초기 로드 시에만 사용
        document.querySelectorAll('.section').forEach((section, index) => {
            section.classList.remove('active', 'up', 'down', 'prev');
        });
        
        const activeSection = document.querySelectorAll('.section')[this.currentSection];
        if (activeSection) {
            activeSection.classList.add('active');
        }
        
        this.updateIndicator();
        
        // URL 업데이트 (선택사항)
        window.history.pushState(null, null, `#section-${this.currentSection}`);
        // 섹션 변경 이벤트 발생 (초기 로드용)
        window.dispatchEvent(new CustomEvent('sectionChange', { detail: { index: this.currentSection } }));
    }

    
    updateIndicator() {
        // 인디케이터 업데이트
        document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSection);
        });
    }
}

// ==================== 슬라이더 관리 ==================== 
class SlideManager {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlide();
    }

    setupEventListeners() {
        document.querySelector('.slide-btn.prev').addEventListener('click', () => this.previousSlide());
        document.querySelector('.slide-btn.next').addEventListener('click', () => this.nextSlide());
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlide();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlide();
    }

    updateSlide() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        document.querySelector('.current-slide').textContent = this.currentSlide + 1;
    }
}

// ==================== 탭 관리 ==================== 
class TabManager {
    constructor() {
        this.tabs = document.querySelectorAll('.tab-btn');
        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => this.selectTab(tab));
        });
    }

    selectTab(selectedTab) {
        this.tabs.forEach(tab => tab.classList.remove('active'));
        selectedTab.classList.add('active');
        
        // 여기에 탭 콘텐츠 변경 로직을 추가할 수 있습니다
        const tabName = selectedTab.dataset.tab;
        console.log('Selected tab:', tabName);
    }
}

// ==================== 스크롤 애니메이션 ==================== 
class ScrollAnimation {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        document.querySelectorAll('.brand-item, .franchise-item, .news-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// ==================== 페이지 로드 시 초기화 ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // 풀페이지 스크롤 초기화
    window.fullPageScroll = new FullPageScroll();
    
    // 슬라이더 초기화
    window.slideManager = new SlideManager();
    
    // 탭 관리자 초기화
    window.tabManager = new TabManager();
    
    // 스크롤 애니메이션 초기화
    window.scrollAnimation = new ScrollAnimation();
    
    // 페이지 로드 시 첫 번째 섹션 표시
    window.fullPageScroll.goToSection(0, false);
});

// ==================== URL 해시 처리 ==================== 
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#section-')) {
        const sectionIndex = parseInt(hash.split('-')[1]);
        if (!isNaN(sectionIndex)) {
            window.fullPageScroll.goToSection(sectionIndex);
        }
    }
});

// ==================== 초기 로드 시 URL 확인 ==================== 
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#section-')) {
        const sectionIndex = parseInt(hash.split('-')[1]);
        if (!isNaN(sectionIndex) && sectionIndex < window.fullPageScroll.totalSections) {
            window.fullPageScroll.goToSection(sectionIndex);
        }
    }
});
