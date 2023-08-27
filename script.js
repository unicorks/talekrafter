window.addEventListener('load', function(){
    count = 0

    function download(filename, text) {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', filename);

                element.style.display = 'none';
                document.body.appendChild(element);

                element.click();

                document.body.removeChild(element);
                }

        document.querySelector('#submit').addEventListener('click', () => {
            let name = document.querySelector('#name');
            let line = document.querySelector('#line');
            if (name.value !== '' && line.value !== '') {
                // add logic to insert line in div
                let parent = document.querySelector('#story');
                const div = document.createElement('div');
                arr = ['said', 'declared', 'added', 'remarked', 'mentioned']
                const verb = arr[Math.floor(Math.random() * arr.length)];
                div.textContent = `${name.value} ${verb}: ${line.value}`
                div.classList.add('story_line')
                name.value = ''
                line.value = ''
                parent.appendChild(div)
                count += 1
            }
        })

        document.querySelector('#export').addEventListener('click', () => {
            if (count !== 0) {
                let text = ""
                let lines = document.querySelector('#story').children
                for (i = 0; i < lines.length; i++){
                    text = text.concat(lines[i].textContent)
                }
                download('story.txt', text)
            }
        })

        })