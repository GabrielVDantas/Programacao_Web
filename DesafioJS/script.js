fetch('https://663d545517145c4d8c394beb.mockapi.io/api/v1/object')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('.table tbody');
        tableBody.innerHTML = ''; // Limpa a tabela

        data.forEach((item, index) => {
            const row = document.createElement('tr');
            const th = document.createElement('th');
            th.scope = 'row';
            th.textContent = index + 1;
            row.appendChild(th);

            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            row.appendChild(nameCell);

            const avatarCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = item.avatar;
            img.alt = item.name;

            img.classList.add('avatar-image');
            avatarCell.appendChild(img);
            row.appendChild(avatarCell);

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));