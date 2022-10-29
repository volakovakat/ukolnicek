# ukolnicek - zadání
V hlavním souboru index.js vytvořte komponentu Task, která bude představovat jeden úkol. Komponenta bude jako svoje props očekávat objekt s jedním úkolem.
Vytvořte funkci renderTasks, která obdrží seznam úkolů a zobrazí je na stránce pomocí komponenty Task.
Stáhněte si z API seznam úkolů a pomocí renderTasks je zobrazte na stránce.
Zařiďte, že při zaškrtnutí přepínače Pouze nesplněné se zobrazí pouze nesplněné úkoly. Bude potřeba ve správnou chvíli znovu zavolat funkci fetch a poté renderTasks s novými daty.
Pokud uživatel odškrtne přepínač, měly by se zobrazit opět všechny úkoly.
