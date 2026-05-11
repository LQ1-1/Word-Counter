    // ====== 计数器 ======
    const appTitle = document.getElementById('appTitle');
    const textInput = document.getElementById('textInput');
    const wordCountDisplay = document.getElementById('wordCount');
    const selectedWordCountDisplay = document.getElementById('selectedWordCount');
    const charCountDisplay = document.getElementById('charCount');
    const charCountNoSpaceDisplay = document.getElementById('charCountNoSpace');
    const wordCountLabel = document.getElementById('wordCountLabel');
    const selectedWordCountLabel = document.getElementById('selectedWordCountLabel');
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
    const pageTabs = document.getElementById('pageTabs');
    const addPageBtn = document.getElementById('addPageBtn');
    const renameModal = document.getElementById('renameModal');
    const renameModalTitle = document.getElementById('renameModalTitle');
    const renameModalClose = document.getElementById('renameModalClose');
    const renameInputLabel = document.getElementById('renameInputLabel');
    const renameInput = document.getElementById('renameInput');
    const renameHelper = document.getElementById('renameHelper');
    const renameResetBtn = document.getElementById('renameResetBtn');
    const renameCancelBtn = document.getElementById('renameCancelBtn');
    const renameSaveBtn = document.getElementById('renameSaveBtn');

    const DRAFT_STORAGE_KEY = 'wordCounterPagesV1';
    const LEGACY_DRAFT_STORAGE_KEY = 'wordCounterDraftV1';
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
        selectedWordCount: '选中单词数',
        charCount: '字符数 (Chars)',
        charCountNoSpace: '字符 (不含空格)',
        clearText: '清空文本',
        exportMd: '导出为 .md',
        underline: '下划线',
        hint: '提示：先选中文字，再右键',
        addPage: '+ 新文章',
        untitledPage: '文章',
        deletePage: '删除文章',
        confirmDeletePage: '确定删除这篇文章吗？',
        renamePage: '重命名标签',
        renameInputLabel: '标签名称',
        renameHelper: '留空则恢复自动名称',
        renameReset: '使用自动名称',
        renameCancel: '取消',
        renameSave: '保存',
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
        selectedWordCount: 'Selected Words',
        charCount: 'Chars',
        charCountNoSpace: 'Chars (No Spaces)',
        clearText: 'Clear Text',
        exportMd: 'Export .md',
        underline: 'Underline',
        hint: 'Tip: select text first, then right-click',
        addPage: '+ New Article',
        untitledPage: 'Article',
        deletePage: 'Delete article',
        confirmDeletePage: 'Delete this article?',
        renamePage: 'Rename tab',
        renameInputLabel: 'Tab name',
        renameHelper: 'Leave blank to use the automatic name',
        renameReset: 'Use automatic name',
        renameCancel: 'Cancel',
        renameSave: 'Save',
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
        selectedWordCount: 'Markierte Wörter',
        charCount: 'Zeichen',
        charCountNoSpace: 'Zeichen (ohne Leerzeichen)',
        clearText: 'Text löschen',
        exportMd: 'Als .md exportieren',
        underline: 'Unterstreichen',
        hint: 'Tipp: Text markieren, dann Rechtsklick',
        addPage: '+ Neuer Text',
        untitledPage: 'Text',
        deletePage: 'Text löschen',
        confirmDeletePage: 'Diesen Text löschen?',
        renamePage: 'Tab umbenennen',
        renameInputLabel: 'Tab-Name',
        renameHelper: 'Leer lassen, um den automatischen Namen zu verwenden',
        renameReset: 'Automatischen Namen verwenden',
        renameCancel: 'Abbrechen',
        renameSave: 'Speichern',
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
        selectedWordCount: 'מילים שנבחרו',
        charCount: 'תווים',
        charCountNoSpace: 'תווים (ללא רווחים)',
        clearText: 'נקה טקסט',
        exportMd: 'ייצא ‎.md',
        underline: 'קו תחתון',
        hint: 'טיפ: סמן טקסט ואז לחץ לחיצה ימנית',
        addPage: '+ מאמר חדש',
        untitledPage: 'מאמר',
        deletePage: 'מחק מאמר',
        confirmDeletePage: 'למחוק את המאמר הזה?',
        renamePage: 'שנה שם לשונית',
        renameInputLabel: 'שם הלשונית',
        renameHelper: 'השאר ריק כדי להשתמש בשם אוטומטי',
        renameReset: 'השתמש בשם אוטומטי',
        renameCancel: 'ביטול',
        renameSave: 'שמור',
      },
    };

    let pages = [];
    let activePageId = '';
    let renamingPageId = '';

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
      selectedWordCountLabel.textContent = t.selectedWordCount;
      charCountLabel.textContent = t.charCount;
      charCountNoSpaceLabel.textContent = t.charCountNoSpace;
      clearTextBtn.textContent = t.clearText;
      exportMdBtn.textContent = t.exportMd;
      underlineBtn.textContent = t.underline;
      contextHint.textContent = t.hint;
      addPageBtn.textContent = t.addPage;
      renameModalTitle.textContent = t.renamePage;
      renameInputLabel.textContent = t.renameInputLabel;
      renameHelper.textContent = t.renameHelper;
      renameResetBtn.textContent = t.renameReset;
      renameCancelBtn.textContent = t.renameCancel;
      renameSaveBtn.textContent = t.renameSave;
      renderPageTabs();
    }

    function createPage(data = {}) {
      return {
        id: data.id || `page-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        tabName: typeof data.tabName === 'string' ? data.tabName : '',
        text: typeof data.text === 'string' ? data.text : '',
        titleHtml: typeof data.titleHtml === 'string' ? data.titleHtml : '',
        titleImages: Array.isArray(data.titleImages) ? data.titleImages : [],
      };
    }

    function getPageLabel(page, index) {
      const customName = (page.tabName || '').trim();
      if (customName) return customName.length > 16 ? `${customName.slice(0, 16)}...` : customName;

      const temp = document.createElement('div');
      temp.innerHTML = page.titleHtml || '';
      const title = (temp.innerText || '').replace(/\s+/g, ' ').trim();
      if (title) return title.length > 16 ? `${title.slice(0, 16)}...` : title;

      const text = (page.text || '').replace(/\s+/g, ' ').trim();
      if (text) return text.length > 16 ? `${text.slice(0, 16)}...` : text;

      const t = translations[getCurrentLang()] || translations.zh;
      return `${t.untitledPage} ${index + 1}`;
    }

    function getActivePage() {
      return pages.find((page) => page.id === activePageId) || pages[0];
    }

    function sanitizeImages(images) {
      return (Array.isArray(images) ? images : []).filter(
        (item) => item && typeof item.dataUrl === 'string' && item.dataUrl.startsWith('data:image/')
      );
    }

    function writeCurrentPageFromDom() {
      const page = getActivePage();
      if (!page) return;
      page.text = textInput.value || '';
      page.titleHtml = titleInput.innerHTML || '';
      page.titleImages = sanitizeImages(titleImages);
    }

    function saveDraft({ skipDomSync = false } = {}) {
      try {
        if (!skipDomSync) writeCurrentPageFromDom();
        const payload = {
          activePageId,
          pages: pages.map((page) => ({
            id: page.id,
            tabName: page.tabName || '',
            text: page.text || '',
            titleHtml: page.titleHtml || '',
            titleImages: sanitizeImages(page.titleImages),
          })),
        };
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
      } catch (_) {}
    }

    function loadDraft() {
      try {
        const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
        if (raw) {
          const payload = JSON.parse(raw);
          if (payload && Array.isArray(payload.pages) && payload.pages.length > 0) {
            pages = payload.pages.map((page) =>
              createPage({
                id: page.id,
                tabName: page.tabName,
                text: page.text,
                titleHtml: page.titleHtml,
                titleImages: sanitizeImages(page.titleImages),
              })
            );
            activePageId = pages.some((page) => page.id === payload.activePageId)
              ? payload.activePageId
              : pages[0].id;
            loadActivePageIntoDom();
            return;
          }
        }

        const legacyRaw = localStorage.getItem(LEGACY_DRAFT_STORAGE_KEY);
        if (legacyRaw) {
          const legacy = JSON.parse(legacyRaw);
          pages = [
            createPage({
              text: legacy && typeof legacy.text === 'string' ? legacy.text : '',
              titleHtml: legacy && typeof legacy.titleHtml === 'string' ? legacy.titleHtml : '',
              titleImages: legacy ? sanitizeImages(legacy.titleImages) : [],
            }),
          ];
        } else {
          pages = [createPage()];
        }
        activePageId = pages[0].id;
        loadActivePageIntoDom();
        saveDraft({ skipDomSync: true });
      } catch (_) {
        pages = [createPage()];
        activePageId = pages[0].id;
        loadActivePageIntoDom();
      }
    }

    function loadActivePageIntoDom() {
      const page = getActivePage() || createPage();
      textInput.value = page.text || '';
      titleInput.innerHTML = page.titleHtml || '';
      titleImages = sanitizeImages(page.titleImages);
      closeTitleImageViewer();
      renderTitleImages();
      updateStats();
      renderPageTabs();
    }

    function switchPage(pageId) {
      if (pageId === activePageId) return;
      writeCurrentPageFromDom();
      activePageId = pageId;
      loadActivePageIntoDom();
      saveDraft({ skipDomSync: true });
      textInput.focus();
    }

    function addPage() {
      writeCurrentPageFromDom();
      const page = createPage();
      pages.push(page);
      activePageId = page.id;
      loadActivePageIntoDom();
      saveDraft({ skipDomSync: true });
      textInput.focus();
    }

    function deletePage(pageId) {
      if (pages.length <= 1) return;
      const t = translations[getCurrentLang()] || translations.zh;
      if (!window.confirm(t.confirmDeletePage)) return;
      const index = pages.findIndex((page) => page.id === pageId);
      if (index === -1) return;
      pages.splice(index, 1);
      if (activePageId === pageId) {
        activePageId = pages[Math.max(0, index - 1)].id;
        loadActivePageIntoDom();
      } else {
        renderPageTabs();
      }
      saveDraft({ skipDomSync: true });
    }

    function renamePage(pageId) {
      const page = pages.find((item) => item.id === pageId);
      if (!page) return;
      renamingPageId = pageId;
      renameInput.value = page.tabName || '';
      renameModal.classList.add('open');
      renameModal.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        renameInput.focus();
        renameInput.select();
      }, 0);
    }

    function closeRenameModal() {
      renameModal.classList.remove('open');
      renameModal.setAttribute('aria-hidden', 'true');
      renamingPageId = '';
    }

    function saveRenamedPage() {
      const page = pages.find((item) => item.id === renamingPageId);
      if (!page) return closeRenameModal();
      page.tabName = renameInput.value.trim();
      renderPageTabs();
      saveDraft({ skipDomSync: true });
      closeRenameModal();
    }

    renameSaveBtn.addEventListener('click', saveRenamedPage);
    renameCancelBtn.addEventListener('click', closeRenameModal);
    renameModalClose.addEventListener('click', closeRenameModal);
    renameResetBtn.addEventListener('click', () => {
      renameInput.value = '';
      saveRenamedPage();
    });
    renameModal.addEventListener('mousedown', (e) => {
      if (e.target === renameModal) closeRenameModal();
    });
    renameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveRenamedPage();
      if (e.key === 'Escape') closeRenameModal();
    });

    function renderPageTabs() {
      if (!pageTabs) return;
      const t = translations[getCurrentLang()] || translations.zh;
      pageTabs.innerHTML = '';
      pages.forEach((page, index) => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = `page-tab${page.id === activePageId ? ' active' : ''}`;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(page.id === activePageId));
        tab.title = getPageLabel(page, index);
        tab.addEventListener('click', () => switchPage(page.id));

        const label = document.createElement('span');
        label.className = 'page-tab-label';
        label.textContent = getPageLabel(page, index);
        label.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          renamePage(page.id);
        });
        tab.appendChild(label);

        const renameBtn = document.createElement('span');
        renameBtn.className = 'page-tab-rename';
        renameBtn.setAttribute('role', 'button');
        renameBtn.setAttribute('aria-label', t.renamePage);
        renameBtn.title = t.renamePage;
        renameBtn.textContent = 'Aa';
        renameBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          renamePage(page.id);
        });
        tab.appendChild(renameBtn);

        if (pages.length > 1) {
          const closeBtn = document.createElement('span');
          closeBtn.className = 'page-tab-close';
          closeBtn.setAttribute('role', 'button');
          closeBtn.setAttribute('aria-label', t.deletePage);
          closeBtn.title = t.deletePage;
          closeBtn.textContent = '×';
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deletePage(page.id);
          });
          tab.appendChild(closeBtn);
        }

        pageTabs.appendChild(tab);
      });
    }

    addPageBtn.addEventListener('click', addPage);

    textInput.addEventListener('input', () => {
      updateStats();
      saveDraft();
      renderPageTabs();
    });

    textInput.addEventListener('select', updateSelectedWordCount);
    textInput.addEventListener('keyup', updateSelectedWordCount);
    textInput.addEventListener('mouseup', updateSelectedWordCount);

    document.addEventListener('selectionchange', () => {
      if (document.activeElement === textInput) updateSelectedWordCount();
    });

    function countWords(text) {
      const trimmedText = String(text || '').trim();
      return trimmedText ? trimmedText.split(/\s+/).length : 0;
    }

    function getSelectedText() {
      const start = textInput.selectionStart;
      const end = textInput.selectionEnd;
      if (typeof start !== 'number' || typeof end !== 'number' || start === end) return '';
      return textInput.value.slice(Math.min(start, end), Math.max(start, end));
    }

    function updateSelectedWordCount() {
      selectedWordCountDisplay.textContent = countWords(getSelectedText());
    }

    function updateStats() {
      const text = textInput.value;

      charCountDisplay.textContent = text.length;

      const textWithoutSpaces = text.replace(/\s/g, '');
      charCountNoSpaceDisplay.textContent = textWithoutSpaces.length;

      wordCountDisplay.textContent = countWords(text);
      updateSelectedWordCount();
    }

    function clearText() {
      textInput.value = '';
      updateStats();
      saveDraft();
      renderPageTabs();
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

    titleInput.addEventListener('input', () => {
      saveDraft();
      renderPageTabs();
    });

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

      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const timestamp =
        `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-` +
        `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

      const sanitizeName = (name) =>
        (name || '')
          .replace(/\.[^/.]+$/, '')
          .replace(/[^a-zA-Z0-9_-]/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '') || 'image';

      const getExt = (dataUrl, fallback = 'png') => {
        const match = String(dataUrl || '').match(/^data:image\/([a-zA-Z0-9.+-]+);/);
        if (!match) return fallback;
        const ext = match[1].toLowerCase().replace('jpeg', 'jpg');
        return ext;
      };

      let assetFiles = [];
      if (titleImages.length > 0) {
        assetFiles = titleImages.map((img, idx) => {
          const ext = getExt(img.dataUrl, 'png');
          const base = sanitizeName(img.name);
          const filename = `assets/${base}-${idx + 1}.${ext}`;
          return { filename, dataUrl: img.dataUrl, alt: img.name || `title-image-${idx + 1}` };
        });
      }

      if (assetFiles.length > 0 || title) {
        md += `<div align="center">\n\n`;
        if (assetFiles.length > 0) {
          assetFiles.forEach((img) => {
            const alt = img.alt ? img.alt.replace(/"/g, "'") : 'title-image';
            md += `<img src="${img.filename}" alt="${alt}" style="max-width: 100%; height: auto;" />\n\n`;
          });
        }
        if (title) {
          md += `# ${title}\n\n`;
        }
        md += `</div>\n\n---\n\n`;
      }

      md += content;

      if (assetFiles.length === 0) {
        const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const filename = `word-counter-${timestamp}.md`;
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        return;
      }

      function dataUrlToUint8Array(dataUrl) {
        const parts = String(dataUrl || '').split(',');
        if (parts.length < 2) return new Uint8Array();
        const base64 = parts[1];
        const binary = atob(base64);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
        return bytes;
      }

      function crc32(bytes) {
        let crc = 0xffffffff;
        for (let i = 0; i < bytes.length; i++) {
          crc ^= bytes[i];
          for (let j = 0; j < 8; j++) {
            const mask = -(crc & 1);
            crc = (crc >>> 1) ^ (0xedb88320 & mask);
          }
        }
        return (crc ^ 0xffffffff) >>> 0;
      }

      function buildZip(files) {
        const encoder = new TextEncoder();
        const localParts = [];
        const centralParts = [];
        let offset = 0;

        files.forEach((file) => {
          const nameBytes = encoder.encode(file.name);
          const dataBytes = file.data;
          const crc = crc32(dataBytes);
          const size = dataBytes.length;

          const localHeader = new Uint8Array(30 + nameBytes.length);
          const view = new DataView(localHeader.buffer);
          view.setUint32(0, 0x04034b50, true);
          view.setUint16(4, 20, true);
          view.setUint16(6, 0, true);
          view.setUint16(8, 0, true);
          view.setUint16(10, 0, true);
          view.setUint16(12, 0, true);
          view.setUint32(14, crc, true);
          view.setUint32(18, size, true);
          view.setUint32(22, size, true);
          view.setUint16(26, nameBytes.length, true);
          view.setUint16(28, 0, true);
          localHeader.set(nameBytes, 30);

          localParts.push(localHeader, dataBytes);

          const centralHeader = new Uint8Array(46 + nameBytes.length);
          const cview = new DataView(centralHeader.buffer);
          cview.setUint32(0, 0x02014b50, true);
          cview.setUint16(4, 20, true);
          cview.setUint16(6, 20, true);
          cview.setUint16(8, 0, true);
          cview.setUint16(10, 0, true);
          cview.setUint16(12, 0, true);
          cview.setUint16(14, 0, true);
          cview.setUint32(16, crc, true);
          cview.setUint32(20, size, true);
          cview.setUint32(24, size, true);
          cview.setUint16(28, nameBytes.length, true);
          cview.setUint16(30, 0, true);
          cview.setUint16(32, 0, true);
          cview.setUint16(34, 0, true);
          cview.setUint16(36, 0, true);
          cview.setUint32(38, 0, true);
          cview.setUint32(42, offset, true);
          centralHeader.set(nameBytes, 46);
          centralParts.push(centralHeader);

          offset += localHeader.length + size;
        });

        const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
        const end = new Uint8Array(22);
        const eview = new DataView(end.buffer);
        eview.setUint32(0, 0x06054b50, true);
        eview.setUint16(4, 0, true);
        eview.setUint16(6, 0, true);
        eview.setUint16(8, files.length, true);
        eview.setUint16(10, files.length, true);
        eview.setUint32(12, centralSize, true);
        eview.setUint32(16, offset, true);
        eview.setUint16(20, 0, true);

        return new Blob([...localParts, ...centralParts, end], { type: 'application/zip' });
      }

      const files = [];
      files.push({
        name: `word-counter-${timestamp}.md`,
        data: new TextEncoder().encode(md),
      });
      assetFiles.forEach((img) => {
        files.push({
          name: img.filename,
          data: dataUrlToUint8Array(img.dataUrl),
        });
      });

      const zipBlob = buildZip(files);
      const zipUrl = URL.createObjectURL(zipBlob);
      const zipName = `word-counter-${timestamp}.zip`;
      const a = document.createElement('a');
      a.href = zipUrl;
      a.download = zipName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(zipUrl);
    }

    exportMdBtn.addEventListener('click', exportToMarkdown);
