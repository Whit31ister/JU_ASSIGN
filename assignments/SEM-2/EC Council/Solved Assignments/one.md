# CSCU Assignment Unit 1 Answers

(Based on Assignment Unit-1) 

---

# SECTION A

## 1. Define phishing and explain two common techniques used in phishing attacks.

Phishing is a cyberattack in which attackers impersonate trusted organizations or individuals to trick users into revealing sensitive information such as passwords, banking details, or personal data. Two common phishing techniques are email phishing, where fake emails direct users to malicious websites, and spear phishing, where attackers target specific individuals using personalized messages. These attacks exploit human trust and can result in identity theft, financial loss, or unauthorized system access.

---

## 2. What is malware? Provide examples of two types of malware and briefly describe their functionalities.

Malware is malicious software designed to damage, disrupt, or gain unauthorized access to computer systems. One example is a virus, which attaches itself to files and spreads when infected files are executed. Another example is ransomware, which encrypts a victim's files and demands payment for their recovery. Malware can compromise system security, steal data, reduce performance, and cause significant financial and operational damage.

---

## 3. Explain the importance of encryption in cybersecurity. Give two examples of encryption algorithms commonly used to secure data.

Encryption is the process of converting readable data into an unreadable format to prevent unauthorized access. It protects sensitive information during storage and transmission, ensuring confidentiality and privacy. Encryption is essential in online banking, e-commerce, and secure communication. Two commonly used encryption algorithms are AES (Advanced Encryption Standard), which is widely used for securing data, and RSA, which is commonly used for secure key exchange and digital signatures.

---

## 4. Differentiate between symmetric and asymmetric encryption algorithms. Provide an example of each.

Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient but requires secure key sharing. AES is a common example of symmetric encryption. Asymmetric encryption uses two different keys: a public key for encryption and a private key for decryption. It offers enhanced security for communication and key exchange. RSA is a widely used example of asymmetric encryption. Both methods are often combined in modern security systems.

---

## 5. Define SQL injection and discuss two potential consequences of a successful SQL injection attack.

SQL Injection is a web security vulnerability that occurs when attackers insert malicious SQL commands into application inputs to manipulate a database. A successful SQL injection attack can lead to unauthorized access to sensitive data such as usernames, passwords, and financial information. Another consequence is data modification or deletion, which can disrupt business operations and compromise data integrity. SQL injection remains one of the most dangerous threats to web applications.

---

# SECTION B

## 1. Discuss the concept of social engineering in cybersecurity. Provide three examples of social engineering techniques and explain how they can be mitigated.

Social engineering is a technique used by cybercriminals to manipulate people into revealing confidential information or performing actions that compromise security. Instead of attacking systems directly, attackers exploit human psychology, trust, fear, or curiosity.

Common examples include:

**Phishing:** Attackers send fraudulent emails or messages pretending to be legitimate organizations to steal credentials. This can be mitigated through employee awareness training and email filtering systems.

**Pretexting:** An attacker creates a false identity or scenario, such as pretending to be technical support, to obtain sensitive information. Verification procedures and strict identity checks help prevent such attacks.

**Baiting:** Attackers offer something attractive, such as free software or infected USB drives, to lure victims into compromising their systems. Users should avoid unknown devices and download software only from trusted sources.

Organizations can reduce social engineering risks through security awareness programs, multi-factor authentication, regular employee training, and clear security policies.

---

## 2. Explain the role of firewalls in network security. Describe two different types of firewalls and compare their functionalities.

A firewall is a security device or software that monitors and controls incoming and outgoing network traffic according to predefined security rules. It acts as a barrier between trusted internal networks and untrusted external networks, helping prevent unauthorized access and cyberattacks.

A **Packet Filtering Firewall** examines individual packets based on source and destination IP addresses, protocols, and port numbers. It is fast and efficient but cannot inspect packet contents in depth.

A **Stateful Inspection Firewall** monitors active connections and tracks the state of network sessions. It provides better security because it analyzes traffic within the context of established connections.

Packet filtering firewalls are simpler and consume fewer resources, while stateful inspection firewalls offer enhanced security and more intelligent traffic monitoring. Modern organizations often use stateful firewalls for stronger protection against sophisticated network threats.

---

## 3. What is a Distributed Denial of Service (DDoS) attack? Outline three methods used to mitigate the impact of DDoS attacks on a network.

A Distributed Denial of Service (DDoS) attack occurs when multiple compromised devices, often forming a botnet, flood a target server or network with excessive traffic. This overwhelms system resources and prevents legitimate users from accessing services.

Several methods can mitigate DDoS attacks:

**Traffic Filtering and Rate Limiting:** Suspicious traffic is filtered while limiting the number of requests from a single source.

**Content Delivery Networks (CDNs):** CDNs distribute traffic across multiple servers, reducing the burden on the target system.

**DDoS Protection Services:** Specialized services detect and absorb malicious traffic before it reaches the organization’s network.

Additional measures include network redundancy, load balancing, and continuous traffic monitoring. Effective DDoS mitigation helps maintain service availability and protects organizations from financial and reputational damage.

---

# SECTION C

## 1. Discuss the steps involved in conducting a vulnerability assessment. Explain how vulnerability scanning tools contribute to this process and provide two examples of such tools.

A vulnerability assessment is a systematic process used to identify, analyze, and prioritize security weaknesses in an organization's systems, networks, and applications. It helps organizations understand potential security risks and take corrective actions before attackers can exploit them.

The first step is **asset identification**, where all hardware, software, databases, and network components are identified. The second step is **vulnerability scanning**, during which automated tools scan systems to detect known security weaknesses such as missing patches, insecure configurations, and outdated software. The third step is **risk assessment**, where vulnerabilities are evaluated based on their severity and potential impact. The fourth step is **prioritization and remediation**, in which security teams address the most critical vulnerabilities first. Finally, a **verification and reporting** phase ensures that identified vulnerabilities have been successfully resolved.

Vulnerability scanning tools play a crucial role by automating the detection process, saving time, and improving accuracy. These tools compare system configurations against extensive vulnerability databases and generate detailed reports.

Two widely used vulnerability scanning tools are **Nessus** and **OpenVAS**. Nessus provides comprehensive vulnerability detection and reporting capabilities, while OpenVAS is a popular open-source vulnerability assessment solution.

Regular vulnerability assessments improve security posture, reduce cyber risks, support regulatory compliance, and help organizations proactively defend against cyber threats.

---

## 2. Explain the concept of penetration testing in cybersecurity. Describe the difference between white-box and black-box penetration testing approaches, and discuss the advantages and disadvantages of each.

Penetration testing, commonly known as ethical hacking, is a controlled cybersecurity assessment in which security professionals simulate real-world cyberattacks to identify vulnerabilities before malicious attackers can exploit them. The objective is to evaluate the effectiveness of security controls and improve an organization's overall security posture.

**White-box penetration testing** provides testers with complete knowledge of the target environment, including source code, network diagrams, credentials, and system architecture. This approach enables thorough testing and allows security experts to identify hidden vulnerabilities efficiently. Its advantages include comprehensive coverage and faster testing. However, it may not accurately reflect the perspective of an external attacker.

**Black-box penetration testing** is conducted without prior knowledge of the target system. Testers must gather information just as real attackers would. This approach realistically simulates external threats and evaluates the effectiveness of perimeter security. Its advantages include realistic attack simulation and unbiased testing. However, it can be time-consuming and may not uncover deeply hidden vulnerabilities.

Organizations often use both approaches together to obtain a complete understanding of their security weaknesses. Penetration testing helps strengthen defenses, validate security controls, and improve incident preparedness.

---

## 3. Outline the phases of the Incident Response Process in cybersecurity. Provide a detailed explanation of each phase and discuss the importance of having an effective incident response plan in place.

The Incident Response Process is a structured approach used by organizations to detect, manage, and recover from cybersecurity incidents. An effective incident response plan minimizes damage, reduces recovery time, and helps maintain business continuity.

The first phase is **Preparation**, where organizations establish policies, procedures, tools, and response teams. Employees receive training, and incident handling procedures are documented.

The second phase is **Identification**, during which security teams detect and confirm the occurrence of a security incident. Logs, alerts, and monitoring systems are analyzed to determine the nature and scope of the attack.

The third phase is **Containment**, which focuses on preventing the incident from spreading. Affected systems may be isolated from the network to minimize damage and preserve evidence.

The fourth phase is **Eradication**, where the root cause of the incident is identified and removed. This may involve deleting malware, closing vulnerabilities, and applying security patches.

The fifth phase is **Recovery**, during which systems are restored to normal operation. Security teams monitor systems closely to ensure that threats have been eliminated completely.

The final phase is **Lessons Learned**, where the organization reviews the incident, identifies weaknesses, and updates security policies and procedures to prevent future occurrences.

An effective incident response plan improves organizational resilience, minimizes financial losses, ensures regulatory compliance, protects sensitive data, and enables rapid recovery from cyber incidents. Proper planning and execution significantly reduce the overall impact of cybersecurity attacks.

---
