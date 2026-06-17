# Local RAG and document Q&A

## What it is
The pattern: take your documents (PDFs, Word, source code, board minutes, lab notebooks, leaked-source archives), chunk them, embed each chunk with a local embedding model, store vectors in a local database, and answer questions by retrieving the most relevant chunks and feeding them to a local LLM. Stack: LlamaIndex or LangChain for orchestration, Ollama / LM Studio for inference, Nomic / BGE / Mixedbread / Jina embeddings, Qdrant / Chroma / pgvector for vector storage.

## Specific unlocks
- Ask questions over your last 10 years of personal email, notes, and journals on a 24 GB GPU with no third-party access ever.
- Run document Q&A over draft patent applications, M&A diligence binders, or sealed legal discovery without an NDA-violating cloud round-trip.
- Build a clinical-decision-support assistant that ingests an EHR and answers a clinician's questions on the LAN. HIPAA compliance reduces from "negotiate a BAA with a vendor" to "the data never leaves the building."
- Process a leaked-document corpus (Panama Papers scale) on an airgapped laptop. Investigative journalists at ICIJ have publicly described this pattern in 2025.
- Index 10 million internal Slack/Teams/Confluence pages with BGE-M3 embeddings on a single workstation; serve company-wide Q&A from one box.
- Build a personal RAG over your music/photo/video metadata + transcripts (via Whisper) with no per-query API cost.

## Embedding models that matter (May 2026)
- **Nomic Embed Text V2:** 137M params, dense + sparse retrieval from one checkpoint, runs in Ollama via `nomic-embed-text`. Default for most setups.
- **BGE-M3:** multilingual, multi-vector (dense + sparse + ColBERT-style late interaction).
- **Mixedbread mxbai-embed-large-v1:** strong English, popular in indie RAG.
- **Jina embeddings v3 / v4:** good multilingual; 8K-32K input length.
- **Qwen3-Embedding:** released alongside Qwen 3, top of MTEB at time of launch.

## Vector store choices
- **Chroma / LanceDB:** embedded, single-process, fine for personal RAG.
- **Qdrant:** Rust-based standalone server, scales to billions of vectors; the typical workstation choice.
- **pgvector / pg_vectorscale:** if you already have Postgres, add an extension.
- **Weaviate / Milvus:** for actual data-center deployments.

## Pre-AI baseline
Document search pre-RAG: full-text search (Elasticsearch, Solr, ripgrep) returned matching passages but you read them yourself. Lexical search misses paraphrases ("compensation" vs "salary"). Semantic search via embeddings + LLM summarization compresses hours of reading to seconds.

## Hardware / cost
- **Personal scale (10K-100K docs):** 16 GB RAM laptop, no GPU needed for embedding (Nomic Embed runs on CPU); 7-8B local LLM for answering.
- **Power user (1M docs):** 24 GB VRAM GPU for fast batch embedding; Qdrant on a single SSD.
- **Team / org (10M+ docs):** workstation with 64 GB RAM, 32 GB VRAM, NVMe SSD, Qdrant cluster optional.
- All software is free / open source. Cost is hardware + electricity.

## Maturity
Production-grade for: chat-with-your-PDFs, internal-knowledge Q&A, source-code Q&A, regulatory-document review, personal note search.

Breaks / weak:
- Naive RAG (chunk + embed + retrieve + stuff) underperforms on multi-hop questions; needs hybrid (BM25 + vector) and reranking (Cohere reranker has open-weight equivalents now: `bge-reranker-v2-m3`).
- Chunking strategy matters more than embedding model choice for many corpora.
- Long-context LLMs (256K+) are starting to make naive RAG less necessary for some workloads but cost-per-query is still much higher.
- LightRAG and GraphRAG (knowledge-graph-augmented RAG) are becoming mainstream in 2026, adding complexity in exchange for better multi-hop accuracy.

## Sources
- https://docs.llamaindex.ai/en/stable/examples/multi_modal/multi_modal_rag_nomic/
- https://developers.llamaindex.ai/python/examples/embeddings/huggingface/
- https://markaicode.com/ollama-rag-private-documents/
- https://www.sitepoint.com/local-rag-private-documents/
- https://knowledgesdk.com/blog/open-source-embedding-models-rag-2026
- https://github.com/hkuds/lightrag
- https://localllm.in/blog/best-local-llms-pdf-chat-rag
