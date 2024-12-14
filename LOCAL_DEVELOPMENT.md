# Vodič za lokalno pokretanje projekta

## Preduvjeti

1. **Node.js**
   - Otvorite [nodejs.org](https://nodejs.org/)
   - Preuzmite LTS (Long Term Support) verziju
   - Pokrenite instalaciju i pratite čarobnjak
   - Provjerite instalaciju u Command Prompt-u:
     ```bash
     node --version
     npm --version
     ```

2. **Git**
   - Otvorite [git-scm.com](https://git-scm.com/)
   - Preuzmite najnoviju verziju za Windows
   - Tijekom instalacije ostavite sve postavke na zadanim vrijednostima
   - Provjerite instalaciju:
     ```bash
     git --version
     ```

3. **Visual Studio Code**
   - Preuzmite sa [code.visualstudio.com](https://code.visualstudio.com/)
   - Instalirajte preporučene ekstenzije:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense

## Pokretanje projekta

1. **Kloniranje projekta**
   - Otvorite Command Prompt ili PowerShell
   - Navigirajte do željenog direktorija:
     ```bash
     cd C:\Projects
     ```
   - Klonirajte repozitorij:
     ```bash
     git clone <url-vaseg-github-repozitorija>
     cd <ime-projekta>
     ```

2. **Instalacija dependencies-a**
   ```bash
   npm install
   ```

3. **Pokretanje development servera**
   ```bash
   npm run dev
   ```
   - Otvorit će se browser na `http://localhost:5173`
   - Sve promjene u kodu će se automatski refreshati u browseru

4. **Build za produkciju**
   ```bash
   npm run build
   ```
   - Generira se `dist` direktorij s optimiziranim fileovima
   - Za testiranje build verzije:
     ```bash
     npm run preview
     ```

## Troubleshooting

1. **Port 5173 je zauzet**
   - Vite će automatski pokušati koristiti sljedeći slobodni port
   - Možete ručno specificirati port:
     ```bash
     npm run dev -- --port 3000
     ```

2. **Node.js verzija nije kompatibilna**
   - Provjerite verziju u `package.json`
   - Instalirajte Node Version Manager (nvm) za Windows
   - Instalirajte i koristite odgovarajuću verziju

3. **npm install javlja greške**
   - Obrišite `node_modules` direktorij i `package-lock.json`
   - Ponovno pokrenite `npm install`
   - Ako problem perzistira, provjerite Node.js verziju

## VS Code postavke

Za optimalno iskustvo razvoja, dodajte ove postavke u VS Code:

1. Otvorite Command Palette (Ctrl+Shift+P)
2. Upišite "Preferences: Open Settings (JSON)"
3. Dodajte:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "tailwindCSS.includeLanguages": {
       "typescript": "javascript",
       "typescriptreact": "javascript"
     }
   }
   ```

## Git postavke

Preporučene Git postavke za Windows:

```bash
git config --global core.autocrlf true
git config --global core.eol lf
```

## Korisni npm skripte

- `npm run dev` - Pokreće development server
- `npm run build` - Gradi produkcijsku verziju
- `npm run preview` - Pregledava produkcijsku verziju lokalno
- `npm run lint` - Provjerava kod za potencijalne greške