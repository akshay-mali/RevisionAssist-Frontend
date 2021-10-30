module.exports = [
    {
        id: '1',
        name: 'Physics Lecture - 10',
        uploadedOn: 'Sept 24, 2020',
        duration: '00:49:20',
        notes: [
            {
                id: '1',
                topic: 'Thermodynamics',
                details: [
                    {
                        id: '1',
                        text: 'Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, radiation, and physical properties of matter'
                    },
                    {
                        id: '2',
                        text: 'The behavior of these quantities is governed by the four laws of thermodynamics which convey a quantitative description using measurable macroscopic physical quantities, but may be explained in terms of microscopic constituents by statistical mechanics.'
                    },
                ]
            },
            {
                id: '2',
                topic: 'Adiabatic Process',
                details: [
                    {
                        id: '1',
                        text: 'In thermodynamics, an adiabatic process (Greek: adiábatos, “impassable”) is a type of thermodynamic process that occurs without transferring heat or mass between the thermodynamic system and its environment'
                    },
                    {
                        id: '2',
                        text: 'Unlike an isothermal process, an adiabatic process transfers energy to the surroundings only as work.'
                    },
                ]
            },
            {
                id: '3',
                topic: 'Testing Metals',
                details: [
                    {
                        id: '1',
                        text: 'The results of such tests are published in journals, magazines, whitepapers, websites, and in other media.'
                    },
                ]
            },
        ]
    },
    {
        id: '2',
        name: 'Information Retrival Lecture',
        uploadedOn: 'Oct 1, 2020',
        duration: '00:54:31',
        notes: [
            {
                id: '1',
                topic: 'Knuth Morris Pratt Algorithm',
                details: [
                    {
                        id: '1',
                        text: 'KMP Algorithm or Kuth-Morris-Pratt Algorithm is a pattern matching algorithm in the world of computer science and was the first Linear time complexity algorithm for string matching.'
                    },
                    {
                        id: '2',
                        text: 'It was named after Donald Kuth, Vaughan Pratt, and James Morris who together wrote the paper on KMP Algorithm in 1977 although James Morris had independently invented the algorithm in 1970.'
                    },
                    {
                        id: '3',
                        text: 'The time complexity of the KMP Algorithm – data is represented as O (m+n)'
                    },
                ]
            },
        ]
    },
    {
        id: '3',
        name: 'DBMS class - 11',
        uploadedOn: 'Oct 3, 2020',
        duration: '00:44:44',
        notes: [
            {
                id: '1',
                topic: 'ER Diagram',
                details: [
                    {
                        id: '1',
                        text: 'An ER diagram shows the relationship among entity sets. An entity set is a group of similar entities and these entities can have attributes.'
                    },
                    {
                        id: '2',
                        text: 'An ER diagram has three main components:1. Entity 2. Attribute 3. Relationship'
                    },
                ]
            },
            {
                id: '2',
                topic: 'Types of keys in DBMS',
                details: [
                    {
                        id: '1',
                        text: 'Primary Key – A primary is a column or set of columns in a table that uniquely identifies tuples (rows) in that table.'
                    },
                    {
                        id: '2',
                        text: 'Super Key – A super key is a set of one of more columns (attributes) to uniquely identify rows in a table.'
                    },
                    {
                        id: '3',
                        text: 'Candidate Key – A super key with no redundant attribute is known as candidate key.'
                    },
                    {
                        id: '4',
                        text: 'Alternate Key – Out of all candidate keys, only one gets selected as primary key, remaining keys are known as alternate or secondary keys.'
                    },
                    {
                        id: '5',
                        text: 'Composite Key – A key that consists of more than one attribute to uniquely identify rows (also known as records & tuples) in a table is called composite key.'
                    },
                    {
                        id: '6',
                        text: 'Foreign Key – Foreign keys are the columns of a table that points to the primary key of another table. They act as a cross-reference between tables.'
                    },
                ]
            },
        ]
    },
    {
        id: '4',
        name: 'Operating System',
        uploadedOn: 'Oct 6, 2020',
        duration: '01:20:18',
        notes: [
            {
                id: '1',
                topic: 'Types of Operating Systems',
                details: [
                    {
                        id: '1',
                        text: 'Batch OS, Multiprogramming OS, Multitasking OS, Time Sharing OS, Real Time OS'
                    },
                ]
            },
            {
                id: '2',
                topic: 'Threads',
                details: [
                    {
                        id: '1',
                        text: 'A thread is a lightweight process and forms the basic unit of CPU utilization. A process can perform more than one task at the same time by including multiple threads.'
                    },
                    {
                        id: '2',
                        text: 'A thread has its own program counter, register set, and stack'
                    },
                    {
                        id: '3',
                        text: 'A thread shares resources with other threads of the same process the code section, the data section, files and signals.'
                    },
                ]
            },
            {
                id: '3',
                topic: 'Deadlock',
                details: [
                    {
                        id: '1',
                        text: 'A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.'
                    },
                    {
                        id: '2',
                        text: 'Deadlock can arise if following four conditions hold simultaneously (Necessary Conditions):\nMutual Exclusion – One or more than one resource are non-sharable (Only one process can use at a time)\nHold and Wait – A process is holding at least one resource and waiting for resources.\nNo Preemption – A resource cannot be taken from a process unless the process releases the resource.\nCircular Wait – A set of processes are waiting for each other in circular form.'
                    },
                ]
            },
        ]
    },
    {
        id: '5',
        name: 'Artificial Intelligence',
        uploadedOn: 'Oct 10, 2020',
        duration: '00:59:01',
        notes: [
            {
                id: '1',
                topic: 'A-star algorithm',
                details: [
                    {
                        id: '1',
                        text: 'A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.'
                    },
                    {
                        id: '2',
                        text: 'Why A* Search Algorithm?\nA* Search algorithms, unlike other traversal techniques, it has “brains”. What it means is that it is really a smart algorithm which separates it from the other conventional algorithms. This fact is cleared in detail in below sections. '
                    },
                    {
                        id: '3',
                        text: 'And it is also worth mentioning that many games and web-based maps use this algorithm to find the shortest path very efficiently (approximation). '
                    },
                ]
            },
            {
                id: '2',
                topic: 'Time Complexity ',
                details: [
                    {
                        id: '1',
                        text: 'The worse case time complexity is O(E), where E is the number of edges in the graph'
                    },
                ]
            },
        ]
    },
]