document.addEventListener('DOMContentLoaded', () => {
    const logContainer = document.getElementById('log-container');
    const runBtn = document.getElementById('run-btn');
    const bg = document.querySelector('.background');
    const music = document.getElementById('tet-music');
    const logWindow = document.querySelector('.window');
    
    const wishText = document.createElement('div');
    wishText.id = 'wish-text';
    wishText.innerHTML = 'CHÚC MỪNG NĂM MỚI 2026';
    bg.appendChild(wishText);

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = '✿';
        Object.assign(flower.style, {
            left: Math.random() * 100 + 'vw',
            animationDuration: (Math.random() * 3 + 4) + 's',
            animationDelay: Math.random() * 5 + 's'
        });
        bg.appendChild(flower);
    }

    const logs = [
        { tag: '[SUCCESS]', 
            content: '<span class="highlight-bold">47/365 ngày</span> chạy thử nghiệm (Beta) thành công. Hệ thống chính thức bước vào giai đoạn <span class="highlight-green">TĂNG TRƯỞNG THẦN TỐC</span>.', 
            pid: '2026.02' 
        },

        { tag: '[OPTIMIZE]', 
            content: 'Tự động loại bỏ <span class="highlight-bold">"BUG"</span> lo âu. Cập nhật module <span class="highlight-gold">MAY MẮN 2.0</span> cho toàn bộ tiến trình công việc.', 
            pid: '2026.02' 
        },

        { tag: '[RESOURCE]', 
            content: 'Bộ nhớ hạnh phúc: <span class="highlight-blue">UNLIMITED</span>. Băng thông cơ hội: Luôn ở trạng thái <span class="highlight-green">SẴN SÀNG KẾT NỐI</span>.', 
            pid: '2026.02' 
        },

        { tag: '[FIREWALL]', 
            content: 'Kích hoạt lá chắn bảo vệ sức khỏe. <span class="highlight-red">MIỄN DỊCH</span> với mọi tác động tiêu cực từ môi trường bên ngoài.', 
            pid: '2026.02' 
        },

        { tag: '[HUYNHQUOCTOAN]',
            content: '<span class="highlight-bold">Chúc một năm 2026</span>.<span class="highlight-red"> An khang thịnh vượn</span>,<span class="highlight-green"> Phát tài phát lộc</span>, <span class="highlight-gold"> Vạn sự như ý.</span>',
            pid: 'by HuynhToan'
        }
    ];

    let isFinished = false;

    runBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play().catch(() => console.log("Yêu cầu tương tác để phát nhạc"));
        }

        if (isFinished) {
            logWindow.classList.add('fade-out');
            wishText.style.display = 'block';
            runBtn.style.display = 'none';
            return;
        }

        runBtn.disabled = true;
        runBtn.innerText = "PROCESSING...";
        logContainer.innerHTML = ''; 

        logs.forEach((log, index) => {
            setTimeout(() => {
                const time = new Date().toLocaleTimeString('it-IT');
                const html = `
                    <div class="log-item">
                        <div style="color:#888; font-size:11px;">[${time}] :: PID_${log.pid}</div>
                        <div><strong>${log.tag}</strong> ${log.content}</div>
                    </div>`;
                logContainer.insertAdjacentHTML('beforeend', html);

                logContainer.scrollTop = logContainer.scrollHeight;

                if (index === logs.length - 1) {
                    isFinished = true;
                    runBtn.disabled = false;
                    runBtn.innerText = "HOÀN TẤT";
                    runBtn.style.backgroundColor = "#d40000";
                }
            }, index * 800);
        });
    });
});