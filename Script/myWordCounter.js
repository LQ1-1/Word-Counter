    // ====== 计数器 ======
    const appTitle = document.getElementById('appTitle');
    const textInput = document.getElementById('textInput');
    const wordCountDisplay = document.getElementById('wordCount');
    const charCountDisplay = document.getElementById('charCount');
    const charCountNoSpaceDisplay = document.getElementById('charCountNoSpace');
    const wordCountLabel = document.getElementById('wordCountLabel');
    const charCountLabel = document.getElementById('charCountLabel');
    const charCountNoSpaceLabel = document.getElementById('charCountNoSpaceLabel');
    const clearTextBtn = document.getElementById('clearTextBtn');
    const exportMdBtn = document.getElementById('exportMdBtn');
    const underlineBtn = document.getElementById('underlineBtn');
    const contextHint = document.getElementById('contextHint');
    const titleLabel = document.getElementById('titleLabel');
    const colorLabel = document.getElementById('colorLabel');
    const titleImageLabel = document.getElementById('titleImageLabel');
    const titleImageUploadText = document.getElementById('titleImageUploadText');
    const langSelect = document.getElementById('langSelect');
    const langLabel = document.getElementById('langLabel');
    const titleInput = document.getElementById('titleInput');
    const titleImageInput = document.getElementById('titleImageInput');
    const titleImageList = document.getElementById('titleImageList');
    const clearTitleImagesBtn = document.getElementById('clearTitleImagesBtn');
    const titleColorPicker = document.getElementById('titleColorPicker');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const toggleText = document.getElementById('toggleText');
    const chev = document.getElementById('chev');
    const titleImageViewer = document.getElementById('titleImageViewer');
    const titleImageViewerImg = document.getElementById('titleImageViewerImg');
    const titleImagePrev = document.getElementById('titleImagePrev');
    const titleImageNext = document.getElementById('titleImageNext');
    const titleImageClose = document.getElementById('titleImageClose');

    const DRAFT_STORAGE_KEY = 'wordCounterDraftV1';
    const LANG_STORAGE_KEY = 'wordCounterLangV1';

    const translations = {
      zh: {
        appTitle: 'Word Counter',
        pageTitle: '深色极简单词计数器',
        langLabel: '语言',
        langOptions: { zh: '中文', en: 'English', de: 'Deutsch', he: 'עברית' },
        timerStart: '开始',
        timerPause: '暂停',
        timerReset: '重置',
        titleLabel: '题目 (Title)',
        colorLabel: '颜色',
        colorTitle: '选择题目颜色',
        titlePlaceholder: '在此粘贴或输入题目...',
        imageLabel: '题目图片',
        imageUpload: '上传图片',
        imageClear: '清空图片',
        toggleOpen: '打开题目栏',
        toggleClose: '收回题目栏',
        textPlaceholder: '请在此粘贴或输入文本...',
        wordCount: '单词数 (Words)',
        charCount: '字符数 (Chars)',
        charCountNoSpace: '字符 (不含空格)',
        clearText: '清空文本',
        exportMd: '导出为 .md',
        underline: '下划线',
        hint: '提示：先选中文字，再右键',
      },
      en: {
        appTitle: 'Word Counter',
        pageTitle: 'Minimal Dark Word Counter',
        langLabel: 'Language',
        langOptions: { zh: 'Chinese', en: 'English', de: 'German', he: 'Hebrew' },
        timerStart: 'Start',
        timerPause: 'Pause',
        timerReset: 'Reset',
        titleLabel: 'Title',
        colorLabel: 'Color',
        colorTitle: 'Choose title color',
        titlePlaceholder: 'Paste or type a title here...',
        imageLabel: 'Title Images',
        imageUpload: 'Upload Images',
        imageClear: 'Clear Images',
        toggleOpen: 'Open Title Panel',
        toggleClose: 'Close Title Panel',
        textPlaceholder: 'Paste or type text here...',
        wordCount: 'Words',
        charCount: 'Chars',
        charCountNoSpace: 'Chars (No Spaces)',
        clearText: 'Clear Text',
        exportMd: 'Export .md',
        underline: 'Underline',
        hint: 'Tip: select text first, then right-click',
      },
      de: {
        appTitle: 'Word Counter',
        pageTitle: 'Minimaler Dunkler Wortzähler',
        langLabel: 'Sprache',
        langOptions: { zh: 'Chinesisch', en: 'Englisch', de: 'Deutsch', he: 'Hebräisch' },
        timerStart: 'Start',
        timerPause: 'Pause',
        timerReset: 'Zurücksetzen',
        titleLabel: 'Titel',
        colorLabel: 'Farbe',
        colorTitle: 'Titelfarbe wählen',
        titlePlaceholder: 'Titel hier einfügen oder eingeben...',
        imageLabel: 'Titelbilder',
        imageUpload: 'Bilder hochladen',
        imageClear: 'Bilder löschen',
        toggleOpen: 'Titelbereich öffnen',
        toggleClose: 'Titelbereich schließen',
        textPlaceholder: 'Text hier einfügen oder eingeben...',
        wordCount: 'Wörter',
        charCount: 'Zeichen',
        charCountNoSpace: 'Zeichen (ohne Leerzeichen)',
        clearText: 'Text löschen',
        exportMd: 'Als .md exportieren',
        underline: 'Unterstreichen',
        hint: 'Tipp: Text markieren, dann Rechtsklick',
      },
      he: {
        appTitle: 'Word Counter',
        pageTitle: 'מונה מילים כהה מינימלי',
        langLabel: 'שפה',
        langOptions: { zh: 'סינית', en: 'אנגלית', de: 'גרמנית', he: 'עברית' },
        timerStart: 'התחל',
        timerPause: 'השהה',
        timerReset: 'איפוס',
        titleLabel: 'כותרת',
        colorLabel: 'צבע',
        colorTitle: 'בחר צבע לכותרת',
        titlePlaceholder: 'הדבק או הקלד כותרת כאן...',
        imageLabel: 'תמונות כותרת',
        imageUpload: 'העלה תמונות',
        imageClear: 'נקה תמונות',
        toggleOpen: 'פתח לוח כותרת',
        toggleClose: 'סגור לוח כותרת',
        textPlaceholder: 'הדבק או הקלד טקסט כאן...',
        wordCount: 'מילים',
        charCount: 'תווים',
        charCountNoSpace: 'תווים (ללא רווחים)',
        clearText: 'נקה טקסט',
        exportMd: 'ייצא ‎.md',
        underline: 'קו תחתון',
        hint: 'טיפ: סמן טקסט ואז לחץ לחיצה ימנית',
      },
    };

    function getCurrentLang() {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      return saved && translations[saved] ? saved : 'zh';
    }

    function applyLanguage(lang) {
      const t = translations[lang] || translations.zh;
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
      document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
      document.title = t.pageTitle;
      appTitle.textContent = t.appTitle;
      langLabel.textContent = t.langLabel;
      if (langSelect) {
        const options = t.langOptions;
        Array.from(langSelect.options).forEach((opt) => {
          if (options[opt.value]) opt.textContent = options[opt.value];
        });
      }

      timerToggleBtn.textContent = timerRunning ? t.timerPause : t.timerStart;
      timerResetBtn.textContent = t.timerReset;

      titleLabel.textContent = t.titleLabel;
      colorLabel.textContent = t.colorLabel;
      titleColorPicker.title = t.colorTitle;
      titleInput.setAttribute('data-placeholder', t.titlePlaceholder);
      titleImageLabel.textContent = t.imageLabel;
      titleImageUploadText.textContent = t.imageUpload;
      clearTitleImagesBtn.textContent = t.imageClear;

      toggleText.textContent = sidebarOpen ? t.toggleClose : t.toggleOpen;
      textInput.placeholder = t.textPlaceholder;
      wordCountLabel.textContent = t.wordCount;
      charCountLabel.textContent = t.charCount;
      charCountNoSpaceLabel.textContent = t.charCountNoSpace;
      clearTextBtn.textContent = t.clearText;
      exportMdBtn.textContent = t.exportMd;
      underlineBtn.textContent = t.underline;
      contextHint.textContent = t.hint;
    }

    function saveDraft() {
      try {
        const payload = {
          text: textInput.value || '',
          titleHtml: titleInput.innerHTML || '',
          titleImages: titleImages || [],
        };
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
      } catch (_) {}
    }

    function loadDraft() {
      try {
        const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
        if (!raw) return;
        const payload = JSON.parse(raw);
        if (payload && typeof payload.text === 'string') {
          textInput.value = payload.text;
        }
        if (payload && typeof payload.titleHtml === 'string') {
          titleInput.innerHTML = payload.titleHtml;
        }
        if (payload && Array.isArray(payload.titleImages)) {
          titleImages = payload.titleImages.filter(
            (item) => item && typeof item.dataUrl === 'string' && item.dataUrl.startsWith('data:image/')
          );
          renderTitleImages();
        }
      } catch (_) {}
    }

    textInput.addEventListener('input', () => {
      updateStats();
      saveDraft();
    });

    function updateStats() {
      const text = textInput.value;

      charCountDisplay.textContent = text.length;

      const textWithoutSpaces = text.replace(/\s/g, '');
      charCountNoSpaceDisplay.textContent = textWithoutSpaces.length;

      const trimmedText = text.trim();
      wordCountDisplay.textContent = trimmedText ? trimmedText.split(/\s+/).length : 0;
    }

    function clearText() {
      textInput.value = '';
      updateStats();
      try {
        const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
        if (raw) {
          const payload = JSON.parse(raw);
          payload.text = '';
          localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
        }
      } catch (_) {}
      textInput.focus();
    }

    // ====== 计时器 ======
    const timerDisplay = document.getElementById('timerDisplay');
    const timerToggleBtn = document.getElementById('timerToggleBtn');
    const timerResetBtn = document.getElementById('timerResetBtn');

    let timerRunning = false;
    let elapsedSeconds = 0;
    let timerId = null;

    function formatTime(totalSeconds) {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function renderTimer() {
      timerDisplay.textContent = formatTime(elapsedSeconds);
    }

    function startTimer() {
      if (timerRunning) return;
      timerRunning = true;
      applyLanguage(getCurrentLang());
      timerId = setInterval(() => {
        elapsedSeconds += 1;
        renderTimer();
      }, 1000);
    }

    function pauseTimer() {
      timerRunning = false;
      applyLanguage(getCurrentLang());
      if (timerId) clearInterval(timerId);
      timerId = null;
    }

    function resetTimer() {
      pauseTimer();
      elapsedSeconds = 0;
      renderTimer();
    }

    timerToggleBtn.addEventListener('click', () => {
      timerRunning ? pauseTimer() : startTimer();
    });
    timerResetBtn.addEventListener('click', resetTimer);
    renderTimer();

    // ====== 左侧题目栏：打开/收回 ======

    let sidebarOpen = false;
    let titleImages = [];
    let viewerIndex = 0;

    function renderSidebar() {
      sidebarOpen ? sidebar.classList.remove('collapsed') : sidebar.classList.add('collapsed');
      sidebar.setAttribute('aria-hidden', String(!sidebarOpen));
      sidebarToggleBtn.setAttribute('aria-expanded', String(sidebarOpen));
      applyLanguage(getCurrentLang());
      sidebarOpen ? chev.classList.add('open') : chev.classList.remove('open');

      if (sidebarOpen) setTimeout(() => titleInput.focus(), 50);
      else setTimeout(() => textInput.focus(), 50);
    }

    sidebarToggleBtn.addEventListener('click', () => {
      sidebarOpen = !sidebarOpen;
      renderSidebar();
    });

    renderSidebar();

    titleInput.addEventListener('input', saveDraft);

    // ====== 题目图片上传 ======
    function renderTitleImages() {
      titleImageList.innerHTML = '';
      titleImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'title-image-item';

        const imageEl = document.createElement('img');
        imageEl.src = img.dataUrl;
        imageEl.alt = img.name || `title-image-${index + 1}`;
        imageEl.addEventListener('dblclick', () => {
          openTitleImageViewer(index);
        });

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'title-image-remove';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => {
          titleImages.splice(index, 1);
          renderTitleImages();
          saveDraft();
        });

        item.appendChild(imageEl);
        item.appendChild(removeBtn);
        titleImageList.appendChild(item);
      });
    }

    function openTitleImageViewer(index) {
      if (titleImages.length === 0) return;
      viewerIndex = Math.max(0, Math.min(index, titleImages.length - 1));
      titleImageViewerImg.src = titleImages[viewerIndex].dataUrl;
      titleImageViewer.classList.add('open');
      titleImageViewer.setAttribute('aria-hidden', 'false');
    }

    function closeTitleImageViewer() {
      titleImageViewer.classList.remove('open');
      titleImageViewer.setAttribute('aria-hidden', 'true');
    }

    function showPrevImage() {
      if (titleImages.length === 0) return;
      viewerIndex = (viewerIndex - 1 + titleImages.length) % titleImages.length;
      titleImageViewerImg.src = titleImages[viewerIndex].dataUrl;
    }

    function showNextImage() {
      if (titleImages.length === 0) return;
      viewerIndex = (viewerIndex + 1) % titleImages.length;
      titleImageViewerImg.src = titleImages[viewerIndex].dataUrl;
    }

    function readFileAsDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(reader.error || new Error('read failed'));
        reader.readAsDataURL(file);
      });
    }

    titleImageInput.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      try {
        const results = await Promise.all(
          files.map(async (file) => ({
            name: file.name || 'title-image',
            dataUrl: await readFileAsDataUrl(file),
          }))
        );
        const next = results.filter((item) => item.dataUrl.startsWith('data:image/'));
        titleImages = titleImages.concat(next);
        renderTitleImages();
        saveDraft();
      } catch (_) {}

      // 允许重复选择同一文件
      titleImageInput.value = '';
    });

    clearTitleImagesBtn.addEventListener('click', () => {
      if (titleImages.length === 0) return;
      titleImages = [];
      renderTitleImages();
      saveDraft();
    });

    titleImagePrev.addEventListener('click', showPrevImage);
    titleImageNext.addEventListener('click', showNextImage);
    titleImageClose.addEventListener('click', closeTitleImageViewer);
    titleImageViewer.addEventListener('dblclick', closeTitleImageViewer);

    // ====== ✅ 题目颜色自定义逻辑（默认浅蓝色） ======

    function setTitleColor(hex) {
      document.documentElement.style.setProperty('--title-color', hex);
      // placeholder 也跟着更协调（用同色但透明）
      try {
        const rgb = hexToRgb(hex);
        if (rgb) {
          document.documentElement.style.setProperty('--sidebar-placeholder', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`);
        }
      } catch (_) {}
    }

    function hexToRgb(hex) {
      const h = (hex || '').replace('#', '').trim();
      if (h.length === 3) {
        const r = parseInt(h[0] + h[0], 16);
        const g = parseInt(h[1] + h[1], 16);
        const b = parseInt(h[2] + h[2], 16);
        return { r, g, b };
      }
      if (h.length === 6) {
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return { r, g, b };
      }
      return null;
    }

    // 载入：优先用 localStorage 的上次选择
    const savedTitleColor = localStorage.getItem('titleColor');
    if (savedTitleColor) {
      titleColorPicker.value = savedTitleColor;
      setTitleColor(savedTitleColor);
    } else {
      setTitleColor(titleColorPicker.value); // 默认浅蓝
    }

    loadDraft();
    updateStats();

    const initialLang = getCurrentLang();
    if (langSelect) {
      langSelect.value = initialLang;
      langSelect.addEventListener('change', (e) => {
        const next = e.target.value;
        if (!translations[next]) return;
        localStorage.setItem(LANG_STORAGE_KEY, next);
        applyLanguage(next);
      });
    }
    applyLanguage(initialLang);

    // 改色：实时生效 + 持久化
    titleColorPicker.addEventListener('input', (e) => {
      const hex = e.target.value;
      setTitleColor(hex);
      localStorage.setItem('titleColor', hex);
    });

    // ====== 标题：右键“下划线” ======
    const contextMenu = document.getElementById('contextMenu');
    let savedRange = null;

    function hideMenu() {
      contextMenu.style.display = 'none';
      contextMenu.setAttribute('aria-hidden', 'true');
    }

    function showMenu(x, y) {
      contextMenu.style.display = 'block';
      contextMenu.setAttribute('aria-hidden', 'false');

      const menuRect = contextMenu.getBoundingClientRect();
      const pad = 8;
      const maxX = window.innerWidth - menuRect.width - pad;
      const maxY = window.innerHeight - menuRect.height - pad;

      contextMenu.style.left = Math.max(pad, Math.min(x, maxX)) + 'px';
      contextMenu.style.top = Math.max(pad, Math.min(y, maxY)) + 'px';
    }

    function selectionIsInsideTitle() {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return false;
      const range = sel.getRangeAt(0);
      const common = range.commonAncestorContainer;
      return titleInput.contains(common.nodeType === 1 ? common : common.parentNode);
    }

    titleInput.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return hideMenu();
      if (!selectionIsInsideTitle()) return hideMenu();

      const range = sel.getRangeAt(0);
      if (range.collapsed) return hideMenu();

      savedRange = range.cloneRange();
      showMenu(e.clientX, e.clientY);
    });

    underlineBtn.addEventListener('click', () => {
      if (!savedRange) return;

      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(savedRange);

      document.execCommand('underline');

      savedRange = null;
      hideMenu();
      titleInput.focus();
    });

    document.addEventListener('mousedown', (e) => {
      if (contextMenu.style.display === 'block' && !contextMenu.contains(e.target)) hideMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideMenu();
    });

    window.addEventListener('scroll', hideMenu, true);
    window.addEventListener('resize', hideMenu);

    // ====== 导出 Markdown：带题目（若存在） ======

    function getTitlePlainText() {
      return (titleInput.innerText || '').replace(/\u00A0/g, ' ').trim();
    }

    function exportToMarkdown() {
      const title = getTitlePlainText();
      const content = (textInput.value || '').trimEnd();

      let md = '';

      if (titleImages.length > 0 || title) {
        md += `<div align="center">\n\n`;
        if (titleImages.length > 0) {
          titleImages.forEach((img, idx) => {
            const alt = img.name ? img.name.replace(/"/g, "'") : `title-image-${idx + 1}`;
            md += `<img src="${img.dataUrl}" alt="${alt}" style="max-width: 100%; height: auto;" />\n\n`;
          });
        }
        if (title) {
          md += `# ${title}\n\n`;
        }
        md += `</div>\n\n---\n\n`;
      }

      md += content;

      const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const filename =
        `word-counter-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-` +
        `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.md`;

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    exportMdBtn.addEventListener('click', exportToMarkdown);
